import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("<About />", () => {
  it("renders as the #about section with eyebrow and heading", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section#about")).toBeInTheDocument();
    expect(screen.getByText("About SJA")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Building a Smarter Future");
  });

  it("names the founder and the three companies with their status", () => {
    const { container } = render(<About />);
    const text = container.textContent!.replace(/\s+/g, " ");
    expect(screen.getByText("Syeda Juveria Afreen")).toBeInTheDocument();
    expect(text).toContain("SJA Pathway is a live AI career platform");
    expect(text).toContain("SJA Verse is a browser game studio currently in build");
    expect(text).toContain("SJA Robotics is coming soon");
    expect(text).toContain("MEng in Robotics at Stevens");
    expect(text).toContain("15+ countries");
  });

  it("mentions the sja.co main domain", () => {
    render(<About />);
    expect(screen.getByText("sja.co")).toBeInTheDocument();
  });

  it("links 'Know More' to the founder portfolio in a new tab safely", () => {
    render(<About />);
    const link = screen.getByRole("link", { name: "Know More" });
    expect(link).toHaveAttribute("href", "https://sja-portfolio.netlify.app/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the six stat tiles with numbers and labels", () => {
    render(<About />);
    const stats: [string, string][] = [
      ["3", "Companies"],
      ["2", "Platforms Live"],
      ["40+", "Subscribers"],
      ["15+", "Countries"],
      ["1", "Founder"],
      ["∞", "Ambition"],
    ];
    for (const [num, label] of stats) {
      const labelEl = screen.getByText(label);
      const tile = labelEl.parentElement!;
      expect(tile.querySelector("div.text-3xl")).toHaveTextContent(num);
      expect(tile.querySelector("svg path")).toHaveAttribute("d");
    }
  });
});
