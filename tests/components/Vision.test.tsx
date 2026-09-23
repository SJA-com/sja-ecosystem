import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Vision from "@/components/Vision";

describe("<Vision />", () => {
  it("renders as the #vision section with heading", () => {
    const { container } = render(<Vision />);
    expect(container.querySelector("section#vision")).toBeInTheDocument();
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("The Future of SJA");
  });

  it("renders the intro copy", () => {
    render(<Vision />);
    expect(screen.getByText(/SJA is more than three companies/)).toHaveTextContent(
      "it's a commitment to build real products people actually use"
    );
  });

  it("renders the three pillar cards in order with descriptions", () => {
    render(<Vision />);
    const h3s = screen.getAllByRole("heading", { level: 3 });
    expect(h3s.map((h) => h.textContent)).toEqual([
      "Cross-Industry Synergy",
      "Global Expansion",
      "People First",
    ]);
    expect(h3s[0].nextElementSibling).toHaveTextContent(/Pathway's AI career platform, Verse's browser games/);
    expect(h3s[1].nextElementSibling).toHaveTextContent(/15\+ countries/);
    expect(h3s[2].nextElementSibling).toHaveTextContent(/exists to empower people/);
  });

  it("renders the founder quote with attribution", () => {
    const { container } = render(<Vision />);
    const quote = container.querySelector("blockquote")!;
    expect(quote).toHaveTextContent(
      "“SJA isn't just a brand — it's a promise to innovate relentlessly"
    );
    expect(screen.getByText("Syeda Juveria Afreen")).toBeInTheDocument();
    expect(screen.getByText("Founder, SJA")).toBeInTheDocument();
  });

  it("contains no links", () => {
    render(<Vision />);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
