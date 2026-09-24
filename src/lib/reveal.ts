/**
 * Scroll-reveal engine shared by the whole page.
 *
 * Contract (see globals.css):
 * - Elements carry `data-reveal` ("" | "left" | "right" | "scale" | "line")
 *   and optionally `--i` for stagger. They are visible by default.
 * - Only once this runs, and only if motion is allowed and
 *   IntersectionObserver exists, is `data-motion` set on <html>. The CSS hides
 *   un-revealed elements solely under that attribute, so no JS, reduced motion,
 *   or a missing IntersectionObserver all leave the content visible.
 * - Elements already in the viewport at start-up are revealed instantly (no
 *   flash). The rest are watched by ONE shared observer and unobserved as soon
 *   as they reveal, which sets `data-revealed="animate"` to play a short
 *   transform/opacity keyframe.
 * - `[data-count]` elements inside a revealed element count up to their value.
 */

export const REVEAL_SELECTOR = "[data-reveal]";

type Win = Window & typeof globalThis;

export function prefersReducedMotion(win: Win = window): boolean {
  return typeof win.matchMedia === "function"
    ? win.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

export function canAnimate(win: Win = window): boolean {
  return typeof win.IntersectionObserver === "function" && !prefersReducedMotion(win);
}

const COUNT_MS = 700;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const node = el.firstChild;
  if (typeof requestAnimationFrame !== "function") return;
  if (!Number.isFinite(target) || target <= 0 || !node || node.nodeType !== 3) return;
  const start = performance.now();
  const final = String(target);
  node.nodeValue = "0";
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / COUNT_MS);
    node.nodeValue = p >= 1 ? final : String(Math.round(easeOut(p) * target));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function reveal(el: HTMLElement, animate: boolean) {
  el.dataset.revealed = animate ? "animate" : "instant";
  if (animate) el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
}

/** Start revealing `[data-reveal]` elements under `root`. Returns a cleanup fn. */
export function initReveal(root: ParentNode = document, win: Win = window): () => void {
  const html = win.document.documentElement;
  const els = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

  if (!canAnimate(win)) {
    html.removeAttribute("data-motion");
    els.forEach((el) => reveal(el, false));
    return () => {};
  }

  // Batch all layout reads before the single write that enables hiding.
  const vh = win.innerHeight || html.clientHeight;
  const pending: HTMLElement[] = [];
  for (const el of els) {
    if (el.dataset.revealed) continue;
    const r = el.getBoundingClientRect();
    const inView = r.bottom > 0 && r.top < vh && (r.width > 0 || r.height > 0);
    if (inView) reveal(el, false);
    else pending.push(el);
  }

  const observer = new win.IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        obs.unobserve(entry.target);
        reveal(entry.target as HTMLElement, true);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  pending.forEach((el) => observer.observe(el));
  html.setAttribute("data-motion", "");

  return () => {
    observer.disconnect();
    html.removeAttribute("data-motion");
  };
}
