import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/font/google", () => ({
  Geist: (opts: { variable: string }) => ({ variable: `mock${opts.variable}`, className: "geist" }),
  Geist_Mono: (opts: { variable: string }) => ({ variable: `mock${opts.variable}`, className: "geist-mono" }),
}));

import RootLayout, { metadata } from "@/app/layout";

describe("root layout", () => {
  it("exports the site title", () => {
    expect(metadata.title).toBe("SJA Inc. | 3 Companies. Real Products. Global Reach.");
  });

  it("exports a description naming the founder and all three companies", () => {
    expect(metadata.description).toBe(
      "SJA Inc. is founded by Syeda Juveria Afreen — home to SJA Pathway (AI career platform), SJA Verse (browser game studio), and SJA Robotics (coming soon)."
    );
  });

  it("exports SEO keywords", () => {
    expect(metadata.keywords).toEqual([
      "SJA",
      "SJA Inc",
      "Syeda Juveria Afreen",
      "SJA Pathway",
      "SJA Verse",
      "SJA Robotics",
      "sjapathway.com",
      "sja.co",
    ]);
  });

  it("renders html[lang=en] with font variables and children in body", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <p id="child">hello</p>
      </RootLayout>
    );
    const doc = new DOMParser().parseFromString(html, "text/html");
    const root = doc.documentElement;
    expect(root.getAttribute("lang")).toBe("en");
    expect(root.className.split(" ")).toEqual(
      expect.arrayContaining(["mock--font-geist-sans", "mock--font-geist-mono", "h-full", "antialiased"])
    );
    expect(doc.body.className).toBe("min-h-full flex flex-col");
    expect(doc.body.querySelector("#child")?.textContent).toBe("hello");
  });
});
