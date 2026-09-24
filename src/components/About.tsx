const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** Split "40+" into a count-up target (40) and a static suffix ("+"). */
function StatNumber({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return <>{value}</>;
  return (
    <>
      <span data-count={m[1]}>{m[1]}</span>
      {m[2]}
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div data-reveal="line" className="section-line absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="" className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
              About SJA
            </p>
            <h2 data-reveal="" style={stagger(1)} className="text-4xl sm:text-5xl font-bold mb-6">
              Building a{" "}
              <span className="text-accent">Smarter</span> Future
            </h2>
            <p data-reveal="" style={stagger(2)} className="text-foreground/70 leading-relaxed mb-6">
              <strong className="text-foreground">SJA</strong> is the parent
              brand and vision of{" "}
              <strong className="text-foreground">
                Syeda Juveria Afreen
              </strong>{" "}
              &mdash; three companies shipping real products to people in 15+
              countries.
            </p>
            <p data-reveal="" style={stagger(3)} className="text-foreground/70 leading-relaxed mb-6">
              <strong className="text-foreground">SJA Pathway</strong> is a
              live AI career platform. <strong className="text-foreground">SJA
              Verse</strong> is a browser game studio currently in build.{" "}
              <strong className="text-foreground">SJA Robotics</strong> is
              live, with the founder pursuing an MEng in Robotics at
              Stevens. Each company drives innovation in its own domain while
              sharing a common purpose: empowering people through technology
              and excellence.
            </p>
            <p data-reveal="" style={stagger(4)} className="text-foreground/70 leading-relaxed mb-8">
              The main domain <span className="text-accent font-mono">sja.co</span>{" "}
              connects the network, with each company operating on its own
              domain &mdash; a small, focused portfolio built on real products
              rather than promises.
            </p>
            <div data-reveal="" style={stagger(5)}>
            <a
              href="https://sja-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sheen lift inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold"
            >
              Know More
            </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "3", label: "Companies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { number: "2", label: "Platforms Live", icon: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" },
              { number: "40+", label: "Subscribers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { number: "15+", label: "Countries", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
              { number: "1", label: "Founder", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { number: "\u221E", label: "Ambition", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((stat, i) => (
              <div key={stat.label} data-reveal="scale" style={stagger(i)}>
              <div
                className="gradient-border lift glow rounded-xl p-6 bg-surface hover:bg-surface-2 transition-[background-color,transform] duration-200 ease-out h-full"
              >
                <svg className="w-8 h-8 text-accent mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
                <div className="stat-number text-3xl font-bold text-accent mb-1">
                  <StatNumber value={stat.number} />
                </div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
