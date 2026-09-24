import { describe, expect, it } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { IntersectionObserverMock } from "../setup";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Companies", href: "#subsidiaries" },
  { label: "Founder", href: "#founder" },
  { label: "Vision", href: "#vision" },
];

function renderWithSections() {
  // Sections must exist in the DOM before Navbar's effect runs so the
  // scroll-spy picks them up.
  const ids = ["hero", "about", "subsidiaries", "founder", "vision"];
  const sections = ids.map((id) => {
    const s = document.createElement("section");
    s.id = id;
    document.body.appendChild(s);
    return s;
  });
  const utils = render(<Navbar />);
  return {
    ...utils,
    sections,
    cleanupSections: () => sections.forEach((s) => s.remove()),
  };
}

function desktopLinks(container: HTMLElement) {
  const desktop = container.querySelector("div.hidden.md\\:flex") as HTMLElement;
  expect(desktop).toBeTruthy();
  return within(desktop).getAllByRole("link");
}

describe("<Navbar />", () => {
  it("renders a fixed navigation landmark", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("fixed", "top-0");
  });

  it("shows the SJA logo with alt text, linking home", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("SJA Logo");
    expect(logo).toHaveAttribute("src", expect.stringContaining("sja-logo-circle.png"));
    expect(logo).toHaveAttribute("width", "48");
    expect(logo).toHaveAttribute("height", "48");
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders desktop links in order with correct hash hrefs", () => {
    const { container } = render(<Navbar />);
    const links = desktopLinks(container);
    expect(links.map((l) => l.textContent)).toEqual(NAV.map((n) => n.label));
    links.forEach((l, i) => expect(l).toHaveAttribute("href", NAV[i].href));
  });

  it("has an accessible mobile menu toggle button", () => {
    render(<Navbar />);
    const btn = screen.getByRole("button", { name: "Toggle menu" });
    expect(btn).toHaveClass("md:hidden");
  });

  it("hides the mobile menu initially and opens it on toggle", () => {
    render(<Navbar />);
    for (const n of NAV) expect(screen.getAllByText(n.label)).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));

    for (const n of NAV) {
      const all = screen.getAllByRole("link", { name: n.label });
      expect(all).toHaveLength(2);
      all.forEach((a) => expect(a).toHaveAttribute("href", n.href));
    }
  });

  it("swaps the hamburger icon for a close icon when open", () => {
    const { container } = render(<Navbar />);
    const btn = screen.getByRole("button", { name: "Toggle menu" });
    const path = () => btn.querySelector("path")!.getAttribute("d");
    expect(path()).toBe("M4 6h16M4 12h16M4 18h16");
    fireEvent.click(btn);
    expect(path()).toBe("M6 18L18 6M6 6l12 12");
    fireEvent.click(btn);
    expect(path()).toBe("M4 6h16M4 12h16M4 18h16");
    expect(container.querySelector("div.md\\:hidden.bg-surface")).toBeNull();
  });

  it("closes the mobile menu when a mobile link is clicked", () => {
    const { container } = render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    const mobile = container.querySelector("div.md\\:hidden.bg-surface") as HTMLElement;
    expect(mobile).toBeTruthy();
    fireEvent.click(within(mobile).getByRole("link", { name: "Vision" }));
    expect(container.querySelector("div.md\\:hidden.bg-surface")).toBeNull();
    expect(screen.getAllByText("Vision")).toHaveLength(1);
  });

  describe("scroll-spy", () => {
    it("observes every section[id] with the configured root margin", () => {
      const { sections, cleanupSections } = renderWithSections();
      const obs = IntersectionObserverMock.instances.at(-1)!;
      expect(obs.options).toEqual({ rootMargin: "-40% 0px -40% 0px", threshold: 0 });
      for (const s of sections) expect(obs.observed).toContain(s);
      cleanupSections();
    });

    it("starts on the hero section (no link active, accent border)", () => {
      const { container, cleanupSections } = renderWithSections();
      expect(screen.getByRole("navigation")).toHaveClass("border-accent/50");
      for (const l of desktopLinks(container)) {
        expect(l).not.toHaveClass("font-medium");
        expect(l).toHaveClass("text-foreground/70");
      }
      cleanupSections();
    });

    it.each([
      ["about", "About", "border-blue-400/50", "text-blue-400"],
      ["subsidiaries", "Companies", "border-accent/50", "text-accent"],
      ["founder", "Founder", "border-rose-400/50", "text-rose-400"],
      ["vision", "Vision", "border-emerald-400/50", "text-emerald-400"],
    ])("highlights %s when it intersects", (id, label, border, text) => {
      const { container, sections, cleanupSections } = renderWithSections();
      const obs = IntersectionObserverMock.instances.at(-1)!;
      act(() => obs.trigger([{ target: sections.find((s) => s.id === id)!, isIntersecting: true }]));

      expect(screen.getByRole("navigation")).toHaveClass(border);
      for (const l of desktopLinks(container)) {
        if (l.textContent === label) {
          expect(l).toHaveClass(text, "font-medium");
          expect(l).toHaveAttribute("aria-current", "location");
        } else {
          expect(l).not.toHaveClass("font-medium");
          expect(l).not.toHaveAttribute("aria-current");
        }
      }
      cleanupSections();
    });

    it("ignores entries that are not intersecting", () => {
      const { container, sections, cleanupSections } = renderWithSections();
      const obs = IntersectionObserverMock.instances.at(-1)!;
      act(() => obs.trigger([{ target: sections[3], isIntersecting: false }]));
      for (const l of desktopLinks(container)) expect(l).not.toHaveClass("font-medium");
      cleanupSections();
    });

    it("applies the active style in the mobile menu too", () => {
      const { container, sections, cleanupSections } = renderWithSections();
      const obs = IntersectionObserverMock.instances.at(-1)!;
      act(() => obs.trigger([{ target: sections[1], isIntersecting: true }]));
      fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
      const mobile = container.querySelector("div.md\\:hidden.bg-surface") as HTMLElement;
      expect(within(mobile).getByRole("link", { name: "About" })).toHaveClass("text-blue-400", "font-medium");
      expect(within(mobile).getByRole("link", { name: "Vision" })).not.toHaveClass("font-medium");
      cleanupSections();
    });

    it("disconnects the observer on unmount", () => {
      const { unmount, cleanupSections } = renderWithSections();
      const obs = IntersectionObserverMock.instances.at(-1)!;
      expect(obs.disconnected).toBe(false);
      unmount();
      expect(obs.disconnected).toBe(true);
      cleanupSections();
    });
  });

  it("links to the founder section from both desktop and mobile menus", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Founder" })).toHaveAttribute("href", "#founder");
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    const founderLinks = screen.getAllByRole("link", { name: "Founder" });
    expect(founderLinks).toHaveLength(2);
    founderLinks.forEach((a) => expect(a).toHaveAttribute("href", "#founder"));
  });

  it("reports the mobile menu state via aria-expanded", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });
});
