import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  it("renders nav, main and footer landmarks", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the sections inside <main> in order", () => {
    render(<Home />);
    const ids = Array.from(screen.getByRole("main").querySelectorAll("section[id]")).map((s) => s.id);
    expect(ids).toEqual(["hero", "about", "subsidiaries", "vision"]);
  });

  it("has exactly one h1", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("every in-page hash link targets a section that exists", () => {
    const { container } = render(<Home />);
    const hashes = new Set(
      Array.from(container.querySelectorAll('a[href^="#"]')).map((a) => a.getAttribute("href")!)
    );
    expect(hashes.size).toBeGreaterThan(0);
    for (const h of hashes) {
      expect(container.querySelector(h), `missing target for ${h}`).not.toBeNull();
    }
  });

  it("all external links open in a new tab with noopener", () => {
    const { container } = render(<Home />);
    const external = Array.from(container.querySelectorAll('a[href^="http"]'));
    expect(external.length).toBeGreaterThan(0);
    for (const a of external) {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    }
  });

  it("every image has alt text", () => {
    const { container } = render(<Home />);
    const imgs = Array.from(container.querySelectorAll("img"));
    expect(imgs.length).toBeGreaterThan(0);
    for (const img of imgs) expect(img.getAttribute("alt")).toBeTruthy();
  });
});
