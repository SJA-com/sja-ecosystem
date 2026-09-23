import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("<Hero />", () => {
  it("renders as the #hero section", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section#hero")).toBeInTheDocument();
  });

  it("renders the three-line h1 tagline", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const lines = Array.from(h1.querySelectorAll("span")).map((s) => s.textContent?.trim());
    expect(lines).toEqual(["3 Companies.", "Real Products.", "Global Reach."]);
  });

  it("shows the sja.co domain pill", () => {
    render(<Hero />);
    expect(screen.getByText("sja.co")).toBeInTheDocument();
  });

  it("describes the founder and all three companies", () => {
    render(<Hero />);
    const p = screen.getByText(/SJA Inc\. is founded by Syeda Juveria Afreen/);
    expect(p.textContent).toMatch(/SJA\s+Pathway, an AI career platform/);
    expect(p.textContent).toMatch(/SJA Verse, a browser game studio/);
    expect(p.textContent).toMatch(/SJA Robotics, an AI and robotics company/);
  });

  it("has CTAs linking to the companies and about sections", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Explore Our Companies" })).toHaveAttribute("href", "#subsidiaries");
    expect(screen.getByRole("link", { name: "About SJA" })).toHaveAttribute("href", "#about");
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("renders 12 floating industry icons alternating float animations", () => {
    const { container } = render(<Hero />);
    const floaters = Array.from(container.querySelectorAll("div.absolute[style*='top']")).filter((d) =>
      d.querySelector("svg")
    );
    expect(floaters).toHaveLength(12);
    floaters.forEach((el, i) => {
      expect(el).toHaveClass(i % 2 === 0 ? "animate-float" : "animate-float-reverse");
      expect((el as HTMLElement).style.animationDelay).toBe(`${i * 0.5}s`);
    });
    // Deterministic positions (no hydration mismatch from randomness).
    expect((floaters[0] as HTMLElement).style.top).toBe("5%");
    expect((floaters[0] as HTMLElement).style.left).toBe("8%");
  });

  it("renders deterministically across renders", () => {
    const a = render(<Hero />).container.innerHTML;
    const b = render(<Hero />).container.innerHTML;
    expect(a).toBe(b);
  });
});
