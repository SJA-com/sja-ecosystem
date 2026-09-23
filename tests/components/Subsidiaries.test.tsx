import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Subsidiaries from "@/components/Subsidiaries";

const COMPANIES = [
  {
    name: "SJA Pathway",
    short: "Pathway",
    domain: "sjapathway.com",
    href: "https://sjapathway.com/",
    status: "Live",
    dot: "bg-green-500",
    desc: /AI career platform\. Career guidance, mentorship/,
  },
  {
    name: "SJA Verse",
    short: "Verse",
    domain: "verse.sjapathway.com",
    href: "https://verse.sjapathway.com/",
    status: "Building",
    dot: "bg-blue-400",
    desc: /Browser game studio\./,
  },
  {
    name: "SJA Robotics",
    short: "Robotics",
    domain: "robotics.sjapathway.com",
    href: "https://robotics.sjapathway.com/",
    status: "Live",
    dot: "bg-green-500",
    desc: /Atiana Robot, Sueen Drone/,
  },
] as const;

function layouts(container: HTMLElement) {
  const desktop = container.querySelector("div.hidden.lg\\:block") as HTMLElement;
  const mobile = container.querySelector("div.lg\\:hidden") as HTMLElement;
  expect(desktop).toBeTruthy();
  expect(mobile).toBeTruthy();
  return { desktop, mobile };
}

describe("<Subsidiaries />", () => {
  it("renders as the #subsidiaries section with heading and tagline", () => {
    const { container } = render(<Subsidiaries />);
    expect(container.querySelector("section#subsidiaries")).toBeInTheDocument();
    expect(screen.getByText("Our Companies")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("The SJA Ecosystem");
    expect(screen.getByText("3 companies. Real products. Global reach.")).toBeInTheDocument();
  });

  it("shows a status legend for Live / Building / Coming Soon", () => {
    const { container } = render(<Subsidiaries />);
    const legend = container.querySelector("p.font-mono.text-xs") as HTMLElement;
    expect(legend.textContent).toMatch(/^\s*Live\s*\|\s*Building\s*\|\s*Coming Soon\s*$/);
    const dots = legend.querySelectorAll("span.rounded-full");
    expect(dots[0]).toHaveClass("bg-green-500");
    expect(dots[1]).toHaveClass("bg-blue-400");
    expect(dots[2]).toHaveClass("bg-accent");
  });

  it("shows the SJA / sja.co hub in both layouts", () => {
    const { container } = render(<Subsidiaries />);
    const { desktop, mobile } = layouts(container);
    for (const l of [desktop, mobile]) {
      expect(within(l).getByText("SJA")).toBeInTheDocument();
      expect(within(l).getByText("sja.co")).toBeInTheDocument();
    }
  });

  describe("desktop orbit", () => {
    it("renders exactly the three companies as external links", () => {
      const { container } = render(<Subsidiaries />);
      const { desktop } = layouts(container);
      const links = within(desktop).getAllByRole("link");
      expect(links).toHaveLength(3);
      COMPANIES.forEach((c, i) => {
        expect(links[i]).toHaveTextContent(c.short);
        expect(links[i]).toHaveAttribute("href", c.href);
        expect(links[i]).toHaveAttribute("target", "_blank");
        expect(links[i]).toHaveAttribute("rel", "noopener noreferrer");
      });
    });

    it("renders a status dot matching each company's status", () => {
      const { container } = render(<Subsidiaries />);
      const { desktop } = layouts(container);
      within(desktop)
        .getAllByRole("link")
        .forEach((link, i) => {
          const dot = link.querySelector("span.absolute.top-2.right-2");
          expect(dot).toHaveClass(COMPANIES[i].dot);
        });
    });

    it("shows no 'Soon' badge now that Robotics is live", () => {
      const { container } = render(<Subsidiaries />);
      const { desktop } = layouts(container);
      for (const link of within(desktop).getAllByRole("link")) {
        expect(within(link).queryByText("Soon")).toBeNull();
      }
    });

    it("places the first company at the top of the orbit", () => {
      const { container } = render(<Subsidiaries />);
      const { desktop } = layouts(container);
      const first = within(desktop).getAllByRole("link")[0];
      // jsdom may normalise "+ -220px" to "- 220px"
      expect(first.style.top.replace("+ -", "- ")).toBe("calc(50% - 220px)");
      expect(first.style.left).toMatch(/^calc\(50% \+ 0(px)?\)$/);
    });

    it("has no tooltip until hovered", () => {
      render(<Subsidiaries />);
      expect(screen.queryByRole("heading", { level: 4 })).toBeNull();
    });

    it.each(COMPANIES.map((c, i) => [c.name, i] as const))(
      "shows a tooltip for %s on hover and hides it on leave",
      (_name, i) => {
        const c = COMPANIES[i];
        const { container } = render(<Subsidiaries />);
        const { desktop } = layouts(container);
        const link = within(desktop).getAllByRole("link")[i];

        fireEvent.mouseEnter(link);
        const tip = within(link).getByRole("heading", { level: 4 }).closest("div.w-56") as HTMLElement;
        expect(within(tip).getByRole("heading", { level: 4 })).toHaveTextContent(c.name);
        expect(within(tip).getByText(c.status)).toBeInTheDocument();
        expect(within(tip).getByText(c.domain)).toBeInTheDocument();
        expect(within(tip).getByText(c.desc)).toBeInTheDocument();
        expect(within(tip).getByText("Visit →")).toBeInTheDocument();
        expect(link.firstElementChild!.firstElementChild).toHaveClass("scale-110");
        // only one tooltip at a time
        expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(1);

        fireEvent.mouseLeave(link);
        expect(screen.queryByRole("heading", { level: 4 })).toBeNull();
      }
    );

    it("positions tooltips outward from the orbit centre", () => {
      const { container } = render(<Subsidiaries />);
      const { desktop } = layouts(container);
      const links = within(desktop).getAllByRole("link");
      const tipFor = (i: number) => {
        fireEvent.mouseEnter(links[i]);
        const tip = within(links[i]).getByRole("heading", { level: 4 }).closest("div.w-56") as HTMLElement;
        const out = {
          top: tip.style.top,
          bottom: tip.style.bottom,
          left: tip.style.left,
          right: tip.style.right,
        };
        fireEvent.mouseLeave(links[i]);
        return out;
      };
      // Top item: tooltip above
      expect(tipFor(0)).toMatchObject({ bottom: "calc(100% + 16px)", left: "50%" });
      // Lower-right item: tooltip to the right
      expect(tipFor(1)).toMatchObject({ left: "calc(100% + 16px)", top: "50%" });
      // Lower-left item: tooltip to the left
      expect(tipFor(2)).toMatchObject({ right: "calc(100% + 16px)", top: "50%" });
    });
  });

  describe("mobile orbit", () => {
    function mobileNodes(mobile: HTMLElement) {
      return COMPANIES.map((c) => within(mobile).getByText(c.short).closest("div.absolute.z-20") as HTMLElement);
    }

    it("renders all three companies with status dots and no links initially", () => {
      const { container } = render(<Subsidiaries />);
      const { mobile } = layouts(container);
      const nodes = mobileNodes(mobile);
      nodes.forEach((n, i) => {
        expect(n).toBeTruthy();
        expect(n.querySelector("span.absolute.top-1.right-1")).toHaveClass(COMPANIES[i].dot);
      });
      expect(within(mobile).queryAllByRole("link")).toHaveLength(0);
    });

    it.each(COMPANIES.map((c, i) => [c.name, i] as const))(
      "tapping %s opens the info panel with a Visit link",
      (_name, i) => {
        const c = COMPANIES[i];
        const { container } = render(<Subsidiaries />);
        const { mobile } = layouts(container);
        fireEvent.click(mobileNodes(mobile)[i]);

        expect(within(mobile).getByRole("heading", { level: 3 })).toHaveTextContent(c.name);
        expect(within(mobile).getByText(c.status)).toBeInTheDocument();
        expect(within(mobile).getByText(c.domain)).toBeInTheDocument();
        expect(within(mobile).getByText(c.desc)).toBeInTheDocument();
        const visit = within(mobile).getByRole("link", { name: "Visit →" });
        expect(visit).toHaveAttribute("href", c.href);
        expect(visit).toHaveAttribute("target", "_blank");
        expect(visit).toHaveAttribute("rel", "noopener noreferrer");
      }
    );

    it("tapping the same company again closes the panel", () => {
      const { container } = render(<Subsidiaries />);
      const { mobile } = layouts(container);
      const node = mobileNodes(mobile)[1];
      fireEvent.click(node);
      expect(within(mobile).getByRole("heading", { level: 3 })).toBeInTheDocument();
      fireEvent.click(node);
      expect(within(mobile).queryByRole("heading", { level: 3 })).toBeNull();
      expect(within(mobile).queryAllByRole("link")).toHaveLength(0);
    });

    it("tapping a different company switches the panel", () => {
      const { container } = render(<Subsidiaries />);
      const { mobile } = layouts(container);
      const nodes = mobileNodes(mobile);
      fireEvent.click(nodes[0]);
      fireEvent.click(nodes[2]);
      expect(within(mobile).getByRole("heading", { level: 3 })).toHaveTextContent("SJA Robotics");
      expect(within(mobile).getByRole("link", { name: "Visit →" })).toHaveAttribute(
        "href",
        "https://robotics.sjapathway.com/"
      );
    });

    it("panel container is collapsed while nothing is selected", () => {
      const { container } = render(<Subsidiaries />);
      const { mobile } = layouts(container);
      const panel = mobile.querySelector("div.mt-4") as HTMLElement;
      expect(panel).toHaveClass("opacity-0", "h-0");
      fireEvent.click(mobileNodes(mobile)[0]);
      expect(panel).toHaveClass("opacity-100");
      expect(panel).not.toHaveClass("h-0");
    });
  });
});
