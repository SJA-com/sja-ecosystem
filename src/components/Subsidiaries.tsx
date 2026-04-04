"use client";

import { useState } from "react";

const subsidiaries = [
  {
    name: "SJA Path",
    domain: "path.sja.com",
    link: "https://sjapathway.com",
    description:
      "Career guidance, mentorship, and personal development platform. Helping individuals discover their path and achieve their full potential through AI-powered coaching.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    color: "text-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/10",
    shadow: "shadow-teal-400/20",
  },
  {
    name: "SJA Robotics",
    domain: "robotics.sja.com",
    link: "https://sja-robotics.netlify.app/",
    description:
      "At the forefront of integrating AI and automation into everyday devices. Home to the Atiana Robot, Sueen Drone, and a suite of smart home innovations.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    shadow: "shadow-blue-400/20",
  },
  {
    name: "SJA Care",
    domain: "care.sja.com",
    link: "https://sja-care.netlify.app/",
    description:
      "Revolutionizing healthcare with AI-assisted diagnostics, robotic surgery, and patient care systems that integrate with the Atiana-H platform.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/10",
    shadow: "shadow-red-400/20",
  },
  {
    name: "SJA Constructions",
    domain: "build.sja.com",
    link: "",
    description:
      "Smart construction and infrastructure development powered by automation, robotics-assisted building, and intelligent project management.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    shadow: "shadow-amber-400/20",
  },
  {
    name: "SJA Education",
    domain: "edu.sja.com",
    link: "https://sja-edu.netlify.app/",
    description:
      "Transforming learning through AI-powered tutoring, personalized education paths, and smart classroom technologies for students of all ages.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    shadow: "shadow-cyan-400/20",
  },
  {
    name: "SJA Wear",
    domain: "wear.sja.com",
    link: "",
    description:
      "Fashion meets technology. Smart wearables, tech-integrated clothing, and a fashion line that blends style with innovation.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
    color: "text-pink-400",
    border: "border-pink-400/30",
    bg: "bg-pink-400/10",
    shadow: "shadow-pink-400/20",
  },
  {
    name: "SJA Move",
    domain: "move.sja.com",
    link: "https://sja-move.netlify.app/",
    description:
      "Next-generation transportation solutions including autonomous vehicles, smart logistics, and AI-optimized mobility platforms.",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/10",
    shadow: "shadow-green-400/20",
  },
  {
    name: "SJA Fitness",
    domain: "fit.sja.com",
    link: "https://sja-fit.netlify.app/",
    description:
      "AI-powered fitness tracking, personalized workout plans, smart gym equipment, and health optimization through data-driven insights.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    shadow: "shadow-emerald-400/20",
  },
  {
    name: "SJA Finance",
    domain: "finance.sja.com",
    link: "https://sja-finance.netlify.app/",
    description:
      "Intelligent financial services including AI-driven investment analysis, digital banking solutions, and smart financial planning tools.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/10",
    shadow: "shadow-yellow-400/20",
  },
  {
    name: "SJA Food",
    domain: "food.sja.com",
    link: "https://sja-food.netlify.app/",
    description:
      "Smart agriculture, AI-driven food supply chains, and innovative food technology solutions transforming how we grow, distribute, and consume food.",
    icon: "M12 3c-1.5 0-3 1-3 3 0 1.5 1 2.5 2 3v2H9c-1.5 0-3 1-3 3h12c0-2-1.5-3-3-3h-2V9c1-0.5 2-1.5 2-3 0-2-1.5-3-3-3zM6 16h12v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z",
    color: "text-lime-400",
    border: "border-lime-400/30",
    bg: "bg-lime-400/10",
    shadow: "shadow-lime-400/20",
  },
  {
    name: "SJA Travel",
    domain: "travel.sja.com",
    link: "https://sja-travel.netlify.app/",
    description:
      "Complete travel and hospitality solutions including SJA Airlines, SJA Hotels, and SJA Transport — redefining how people experience the world.",
    icon: "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    color: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/10",
    shadow: "shadow-sky-400/20",
  },
  {
    name: "SJA Realty",
    domain: "realty.sja.com",
    link: "https://sja-realty.netlify.app/",
    description:
      "Smart homes, AI-powered property management, and real estate technology transforming how people buy, sell, and live in modern spaces.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-4 0h4",
    color: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/10",
    shadow: "shadow-violet-400/20",
  },
];

export default function Subsidiaries() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="subsidiaries" className="py-24 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Our Companies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The SJA{" "}
            <span className="text-accent">Ecosystem</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A unified yet diverse portfolio of companies that span multiple
            industries.
          </p>
        </div>

        {/* Orbital Layout - Desktop */}
        <div className="hidden lg:block">
          <div className="relative w-[550px] h-[550px] mx-auto">
            {/* Orbit ring */}
            <div className="absolute inset-[45px] rounded-full border border-border/40" />

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-surface border-2 border-accent/50 flex items-center justify-center z-10 shadow-lg shadow-accent/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">SJA</div>
                <div className="text-[10px] text-foreground/50 font-mono mt-1">
                  sja.com
                </div>
              </div>
            </div>

            {/* Orbital circles */}
            {subsidiaries.map((sub, i) => {
              const angle = (i * 360) / subsidiaries.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 230;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              // Position tooltip outward from center
              const tooltipPos: React.CSSProperties = {};
              const isRight = x >= 0;
              const isBottom = y >= 0;
              const isMainlyHorizontal = Math.abs(x) > Math.abs(y);

              if (isMainlyHorizontal) {
                // Left or right side — tooltip goes horizontally outward
                tooltipPos.top = "50%";
                tooltipPos.transform = "translateY(-50%)";
                if (isRight) {
                  tooltipPos.left = "calc(100% + 16px)";
                } else {
                  tooltipPos.right = "calc(100% + 16px)";
                }
              } else {
                // Top or bottom — tooltip goes vertically outward
                tooltipPos.left = "50%";
                tooltipPos.transform = "translateX(-50%)";
                if (isBottom) {
                  tooltipPos.top = "calc(100% + 16px)";
                } else {
                  tooltipPos.bottom = "calc(100% + 16px)";
                }
              }

              const Wrapper = sub.link ? "a" : "div";
              const wrapperProps = sub.link
                ? { href: sub.link, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={sub.name}
                  {...wrapperProps}
                  className="absolute cursor-pointer z-20"
                  style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: "translate(-50%, -50%)" }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-full ${sub.bg} border ${sub.border} flex flex-col items-center justify-center transition-all duration-300 ${
                        active === i ? `scale-110 shadow-lg ${sub.shadow}` : "hover:scale-105"
                      }`}
                    >
                      <svg
                        className={`w-7 h-7 ${sub.color}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={sub.icon}
                        />
                      </svg>
                      <span className={`text-[9px] font-bold mt-1.5 ${sub.color}`}>
                        {sub.name.replace("SJA ", "")}
                      </span>
                    </div>

                    {/* Tooltip - always positioned outward from orbit */}
                    {active === i && (
                      <div
                        className={`absolute w-56 rounded-xl bg-surface border ${sub.border} p-4 shadow-xl ${sub.shadow} z-30`}
                        style={tooltipPos}
                      >
                        <h4 className={`text-sm font-bold ${sub.color}`}>{sub.name}</h4>
                        <p className="text-foreground/50 text-[10px] font-mono mt-0.5">
                          {sub.domain}
                        </p>
                        <p className="text-foreground/60 text-xs mt-2 leading-relaxed">
                          {sub.description}
                        </p>
                        {sub.link && (
                          <span className={`inline-block mt-2 text-[10px] font-mono ${sub.color}`}>
                            Visit →
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout - Smaller orbital */}
        <div className="lg:hidden">
          <div className="relative w-[340px] h-[340px] mx-auto sm:w-[400px] sm:h-[400px]">
            {/* Orbit ring */}
            <div className="absolute inset-[20px] sm:inset-[25px] rounded-full border border-border/40" />

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-surface border-2 border-accent/50 flex items-center justify-center z-10 shadow-lg shadow-accent/10">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-accent">SJA</div>
                <div className="text-[8px] text-foreground/50 font-mono mt-0.5">sja.com</div>
              </div>
            </div>

            {/* Orbital circles */}
            {subsidiaries.map((sub, i) => {
              const angle = (i * 360) / subsidiaries.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={sub.name}
                  className="absolute z-20"
                  style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: "translate(-50%, -50%)" }}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${sub.bg} border ${sub.border} flex flex-col items-center justify-center transition-all ${
                      active === i ? `scale-110 shadow-lg ${sub.shadow}` : ""
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${sub.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sub.icon} />
                    </svg>
                    <span className={`text-[7px] sm:text-[8px] font-bold mt-0.5 ${sub.color}`}>
                      {sub.name.replace("SJA ", "")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile info panel below orbit */}
          <div
            className={`mt-6 text-center transition-all duration-300 min-h-[100px] ${
              active !== null ? "opacity-100" : "opacity-0"
            }`}
          >
            {active !== null && (
              <div className="max-w-sm mx-auto px-4">
                <h3 className={`text-lg font-bold ${subsidiaries[active].color}`}>
                  {subsidiaries[active].name}
                </h3>
                <p className="text-foreground/50 text-[10px] font-mono mt-0.5">
                  {subsidiaries[active].domain}
                </p>
                <p className="text-foreground/60 text-sm mt-2 leading-relaxed">
                  {subsidiaries[active].description}
                </p>
                {subsidiaries[active].link && (
                  <a
                    href={subsidiaries[active].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-2 text-xs font-mono ${subsidiaries[active].color}`}
                  >
                    Visit →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
