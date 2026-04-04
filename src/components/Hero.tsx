const industryIcons = [
  // Robotics
  "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  // Healthcare
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  // Construction
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  // Education
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  // Fashion
  "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
  // Transport
  "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  // Fitness
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  // Finance
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  // Food
  "M12 3c-1.5 0-3 1-3 3 0 1.5 1 2.5 2 3v2H9c-1.5 0-3 1-3 3h12c0-2-1.5-3-3-3h-2V9c1-0.5 2-1.5 2-3 0-2-1.5-3-3-3zM6 16h12v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z",
  // Airlines
  "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  // Realty
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-4 0h4",
  // Path
  "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
];

// Deterministic positions for floating icons
const iconPositions = [
  { top: "5%", left: "8%", rotate: 15, scale: 0.9 },
  { top: "12%", left: "85%", rotate: -20, scale: 1.1 },
  { top: "25%", left: "3%", rotate: 30, scale: 0.8 },
  { top: "18%", left: "92%", rotate: -10, scale: 1 },
  { top: "40%", left: "6%", rotate: -25, scale: 1.2 },
  { top: "35%", left: "88%", rotate: 20, scale: 0.7 },
  { top: "55%", left: "4%", rotate: 10, scale: 1 },
  { top: "60%", left: "93%", rotate: -30, scale: 0.9 },
  { top: "72%", left: "9%", rotate: -15, scale: 1.1 },
  { top: "78%", left: "86%", rotate: 25, scale: 0.8 },
  { top: "88%", left: "5%", rotate: 5, scale: 1 },
  { top: "85%", left: "90%", rotate: -20, scale: 0.9 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-3xl" />
      </div>

      {/* Floating industry icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {industryIcons.map((icon, i) => {
          const pos = iconPositions[i];
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`absolute hidden sm:block ${isEven ? "animate-float" : "animate-float-reverse"}`}
              style={{
                top: pos.top,
                left: pos.left,
                "--rotate": `${pos.rotate}deg`,
                "--duration": `${7 + (i % 5)}s`,
                animationDelay: `${i * 0.5}s`,
              } as React.CSSProperties}
            >
              <svg
                className="w-10 h-10 text-accent/[0.05]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d={icon}
                />
              </svg>
            </div>
          );
        })}

        {/* Geometric shapes */}
        <div className="absolute top-[10%] left-[20%] w-20 h-20 border border-accent/[0.06] rotate-45 animate-float" style={{ "--rotate": "45deg", "--duration": "12s" } as React.CSSProperties} />
        <div className="absolute top-[60%] right-[15%] w-16 h-16 border border-accent-2/[0.06] rounded-full animate-float-reverse" style={{ "--rotate": "0deg", "--duration": "10s" } as React.CSSProperties} />
        <div className="absolute top-[30%] right-[8%] w-24 h-24 border border-accent-3/[0.05] rotate-12 animate-float" style={{ "--rotate": "12deg", "--duration": "14s" } as React.CSSProperties} />
        <div className="absolute bottom-[20%] left-[15%] w-12 h-12 border border-accent/[0.07] rounded-full animate-float-reverse" style={{ "--rotate": "0deg", "--duration": "9s" } as React.CSSProperties} />
        <div className="absolute top-[45%] left-[25%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-accent/[0.05] animate-float" style={{ "--rotate": "0deg", "--duration": "11s" } as React.CSSProperties} />
        <div className="absolute top-[75%] right-[25%] w-14 h-14 border border-accent-2/[0.05] rotate-[30deg] animate-float-reverse" style={{ "--rotate": "30deg", "--duration": "13s" } as React.CSSProperties} />
        <div className="absolute top-[15%] left-[50%] w-8 h-8 border border-accent-3/[0.06] rounded-full animate-float" style={{ "--rotate": "0deg", "--duration": "8s" } as React.CSSProperties} />
        <div className="absolute bottom-[10%] left-[45%] w-18 h-18 border border-accent/[0.04] rotate-[60deg] animate-float-reverse" style={{ "--rotate": "60deg", "--duration": "15s" } as React.CSSProperties} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          sja.com
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block">One Vision.</span>
          <span className="block bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent animate-gradient">
            Many Industries.
          </span>
          <span className="block">Infinite Impact.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 mb-10">
          SJA is a multi-industry conglomerate founded by Syeda Juveria Afreen,
          driving innovation across robotics, healthcare, education, technology,
          fashion, transportation, fitness, and finance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#subsidiaries"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Our Companies
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border border-border text-foreground/80 hover:border-accent/50 hover:text-accent transition-all"
          >
            About SJA
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
