import { readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { canAnimate, initReveal, prefersReducedMotion } from "@/lib/reveal";
import Home from "@/app/page";
import { IntersectionObserverMock } from "../setup";

const html = document.documentElement;
const realIO = globalThis.IntersectionObserver;

function mockMatchMedia(reduce: boolean) {
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: reduce && q.includes("reduce"),
    media: q,
    addEventListener() {},
    removeEventListener() {},
  })) as unknown as typeof window.matchMedia;
}

function mount() {
  const root = document.createElement("div");
  root.innerHTML = `
    <p data-reveal="">one</p>
    <div data-reveal="scale" style="--i: 1"><span data-count="40">40</span>+</div>
    <p data-reveal="left">three</p>`;
  document.body.appendChild(root);
  return { root, els: Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]")) };
}

beforeEach(() => mockMatchMedia(false));

afterEach(() => {
  globalThis.IntersectionObserver = realIO;
  // @ts-expect-error jsdom has no matchMedia by default
  delete window.matchMedia;
  html.removeAttribute("data-motion");
  document.body.innerHTML = "";
});

describe("scroll reveal", () => {
  it("detects reduced motion and IntersectionObserver support", () => {
    expect(canAnimate()).toBe(true);
    mockMatchMedia(true);
    expect(prefersReducedMotion()).toBe(true);
    expect(canAnimate()).toBe(false);
  });

  it("keeps everything visible under prefers-reduced-motion", () => {
    mockMatchMedia(true);
    const { els } = mount();
    initReveal();
    expect(html.hasAttribute("data-motion")).toBe(false);
    expect(IntersectionObserverMock.instances).toHaveLength(0);
    for (const el of els) expect(el.dataset.revealed).toBe("instant");
    expect(els[1].textContent).toBe("40+");
  });

  it("keeps everything visible when IntersectionObserver is unavailable", () => {
    // @ts-expect-error simulate an old browser
    delete globalThis.IntersectionObserver;
    const { els } = mount();
    initReveal();
    expect(html.hasAttribute("data-motion")).toBe(false);
    for (const el of els) expect(el.dataset.revealed).toBe("instant");
  });

  it("uses one shared observer, reveals on intersect and unobserves", async () => {
    const { els } = mount();
    const cleanup = initReveal();
    expect(html.hasAttribute("data-motion")).toBe(true);
    expect(IntersectionObserverMock.instances).toHaveLength(1);
    const obs = IntersectionObserverMock.instances[0];
    expect(obs.observed).toEqual(els);
    const unobserve = vi.spyOn(obs, "unobserve");

    obs.trigger([{ target: els[0], isIntersecting: false }]);
    expect(els[0].dataset.revealed).toBeUndefined();

    obs.trigger([
      { target: els[0], isIntersecting: true },
      { target: els[1], isIntersecting: true },
    ]);
    expect(els[0].dataset.revealed).toBe("animate");
    expect(els[1].dataset.revealed).toBe("animate");
    expect(els[2].dataset.revealed).toBeUndefined();
    expect(unobserve).toHaveBeenCalledWith(els[0]);
    expect(unobserve).toHaveBeenCalledWith(els[1]);

    // The counter ends on its real value.
    await vi.waitFor(() => expect(els[1].textContent).toBe("40+"), { timeout: 2000 });

    cleanup();
    expect(obs.disconnected).toBe(true);
    expect(html.hasAttribute("data-motion")).toBe(false);
  });

  it("reveals elements already in the viewport instantly (no flash)", () => {
    const { els } = mount();
    vi.spyOn(els[0], "getBoundingClientRect").mockReturnValue({
      top: 10, bottom: 100, left: 0, right: 100, width: 100, height: 90, x: 0, y: 10, toJSON() {},
    } as DOMRect);
    initReveal();
    expect(els[0].dataset.revealed).toBe("instant");
    expect(IntersectionObserverMock.instances[0].observed).not.toContain(els[0]);
  });

  it("is mounted by the home page", () => {
    render(<Home />);
    expect(html.hasAttribute("data-motion")).toBe(true);
    const main = document.querySelector("main")!;
    expect(main.querySelectorAll("[data-reveal]").length).toBeGreaterThan(20);
  });

  it("only hides reveal elements in CSS behind html[data-motion] and no-preference", () => {
    const css = readFileSync(path.resolve(__dirname, "../../src/app/globals.css"), "utf8");
    const hideRules = css.match(/[^{}]*\[data-reveal\][^{}]*\{[^}]*opacity:\s*0[^}]*\}/g) ?? [];
    expect(hideRules.length).toBeGreaterThan(0);
    for (const rule of hideRules) expect(rule).toMatch(/html\[data-motion\]/);
    const start = css.indexOf("@media (prefers-reduced-motion: no-preference)");
    expect(start).toBeGreaterThan(-1);
    expect(css.indexOf("html[data-motion] [data-reveal]:not([data-revealed])")).toBeGreaterThan(start);
  });
});
