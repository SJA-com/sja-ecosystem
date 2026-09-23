import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("<Footer />", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders a contentinfo landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("shows the logo with alt text", () => {
    render(<Footer />);
    const logo = screen.getByAltText("SJA Logo");
    expect(logo).toHaveAttribute("src", "/sja-logo-circle.png");
    expect(logo).toHaveAttribute("width", "32");
  });

  it("shows the brand tagline", () => {
    render(<Footer />);
    expect(screen.getByText("3 companies. Real products. Global reach.")).toBeInTheDocument();
  });

  it("links to each page section", () => {
    render(<Footer />);
    const expected = [
      ["About", "#about"],
      ["Companies", "#subsidiaries"],
      ["Vision", "#vision"],
    ];
    const links = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")!.startsWith("#"));
    expect(links.map((l) => [l.textContent, l.getAttribute("href")])).toEqual(expected);
  });

  it("renders the copyright with the current year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2031-06-01T00:00:00Z"));
    render(<Footer />);
    expect(screen.getByText(/© 2031 SJA\. All rights reserved\./)).toBeInTheDocument();
  });

  it("credits the founder and shows the domain", () => {
    render(<Footer />);
    expect(screen.getByText("Founded by Syeda Juveria Afreen")).toBeInTheDocument();
    expect(screen.getByText("sja.co")).toBeInTheDocument();
  });

  it("links to all three company LinkedIn pages in new tabs", () => {
    render(<Footer />);
    for (const [name, href] of [
      ["SJA Pathway", "https://www.linkedin.com/company/sjapathway"],
      ["SJA Verse", "https://www.linkedin.com/company/sja-verse"],
      ["SJA Robotics", "https://www.linkedin.com/company/sjarobotics"],
    ]) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
