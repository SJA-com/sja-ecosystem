import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Founder from "@/components/Founder";

const text = (el: HTMLElement) => el.textContent!.replace(/\s+/g, " ");

describe("<Founder />", () => {
  it("renders as the #founder section with eyebrow and heading", () => {
    const { container } = render(<Founder />);
    expect(container.querySelector("section#founder")).toBeInTheDocument();
    expect(screen.getByText("Meet the Founder")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("The Founder of SJA Inc.");
  });

  it("shows the founder photo from public/ with descriptive alt text", () => {
    render(<Founder />);
    const img = screen.getByAltText("Syeda Juveria Afreen, Founder of SJA Inc.");
    expect(img).toHaveAttribute("src", "/sja_pic.jpeg");
    expect(existsSync(path.resolve(__dirname, "../../public/sja_pic.jpeg"))).toBe(true);
  });

  it("frames her as founder of SJA Inc., parent of the three companies", () => {
    const { container } = render(<Founder />);
    const t = text(container);
    expect(t).toContain("I'm Syeda Juveria Afreen, founder of SJA Inc., the parent company of SJA Pathway, SJA Verse and SJA Robotics");
    expect(t).toContain("Founder & CEO of SJA Pathway");
    expect(t).toContain("unlock global career opportunities and build strong professional identities");
  });

  it("lists the experience from the Pathway bio", () => {
    const { container } = render(<Founder />);
    const t = text(container);
    expect(t).toContain("With over 5 years of experience in the IT industry");
    expect(t).toContain("collaborating with teams across the USA, France, Australia, and the UK");
    expect(t).toContain("Founder & CEO, building all three companies");
    expect(t).toMatch(/Product & Engineering Lead at map\.ca\s*\(Nov 2025 – Mar 2026\)/);
    const roles = within(screen.getByRole("list", { name: "Roles held" }))
      .getAllByRole("listitem")
      .map((li) => li.textContent);
    expect(roles).toEqual(["Tech Support Engineer", "Senior Software Engineer", "Lead Software Engineer", "CTO"]);
    expect(screen.getByText("Founder & CEO, SJA Inc.")).toBeInTheDocument();
    expect(screen.getByText("Building SJA Pathway, SJA Verse and SJA Robotics")).toBeInTheDocument();
    expect(screen.getByText("Product & Engineering Lead, map.ca")).toBeInTheDocument();
    expect(screen.getByText("Nov 2025 – Mar 2026")).toBeInTheDocument();
  });

  it("lists both education entries with their status", () => {
    render(<Founder />);
    const mca = screen.getByText("Master of Computer Applications (MCA)");
    const meng = screen.getByText("Master of Engineering in Robotics");
    expect(mca.parentElement).toHaveTextContent("Completed");
    expect(meng.parentElement).toHaveTextContent("Pursuing");
    expect(screen.getByText(/focus on AI and intelligent systems/)).toBeInTheDocument();
  });

  it("mentions the creative roles and the SJA Pathway origin story", () => {
    const { container } = render(<Founder />);
    const t = text(container);
    for (const r of ["Game Developer", "Content Writer", "Content Creator"]) expect(t).toContain(r);
    expect(screen.getByRole("heading", { level: 3, name: "Why I Started SJA Pathway" })).toBeInTheDocument();
    expect(t).toContain("more than 300 inquiries");
  });

  it("renders quick-fact counters whose final values are in the markup", () => {
    const { container } = render(<Founder />);
    const counters = Array.from(container.querySelectorAll<HTMLElement>("[data-count]"));
    expect(counters.map((c) => [c.dataset.count, c.parentElement!.textContent])).toEqual([
      ["5", "5+"],
      ["4", "4"],
      ["300", "300+"],
    ]);
  });

  it("links to her social profiles in new tabs", () => {
    render(<Founder />);
    const expected: [string, string][] = [
      ["LinkedIn", "https://www.linkedin.com/in/sja-thedude/"],
      ["Instagram", "https://www.instagram.com/sja_thedude"],
      ["Telegram", "https://t.me/sjathedude"],
      ["Personal Site", "http://ceo.sjapathway.com/"],
    ];
    for (const [label, href] of expected) {
      const a = screen.getByRole("link", { name: label });
      expect(a).toHaveAttribute("href", href);
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("marks its blocks for scroll reveal without hiding them in markup", () => {
    const { container } = render(<Founder />);
    const els = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
    expect(els.length).toBeGreaterThan(5);
    for (const el of els) {
      expect(el.style.opacity).toBe("");
      expect(el).not.toHaveAttribute("hidden");
    }
  });
});
