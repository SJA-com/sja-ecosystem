"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#subsidiaries", label: "Companies" },
  { href: "#vision", label: "Vision" },
];

const sectionColors: Record<string, string> = {
  hero: "border-accent/50",
  about: "border-blue-400/50",
  subsidiaries: "border-accent/50",
  vision: "border-emerald-400/50",
};

const sectionTextColors: Record<string, string> = {
  hero: "text-accent",
  about: "text-blue-400",
  subsidiaries: "text-accent",
  vision: "text-emerald-400",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const borderColor = sectionColors[activeSection] || "border-border";
  const accentText = sectionTextColors[activeSection] || "text-accent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b ${borderColor} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-bold text-white text-sm`}>
              SJA
            </div>
            <span className="text-lg font-bold">sja.com</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    isActive ? `${accentText} font-medium` : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-accent"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm transition-colors duration-300 ${
                    isActive ? `${accentText} font-medium` : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
