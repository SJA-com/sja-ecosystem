export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
              About SJA
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Building a{" "}
              <span className="text-accent">Smarter</span> Future
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              <strong className="text-foreground">SJA</strong> is the parent
              brand and vision of{" "}
              <strong className="text-foreground">
                Syeda Juveria Afreen
              </strong>{" "}
              &mdash; a multi-industry conglomerate with a mission to innovate
              across every sector that touches everyday life.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              From AI-powered robotics to healthcare, from education to fashion,
              from transportation to financial services &mdash; SJA&apos;s
              subsidiaries work together as an ecosystem, each driving
              innovation in its own domain while sharing a common purpose:
              empowering people through technology and excellence.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              The main domain <span className="text-accent font-mono">sja.com</span>{" "}
              connects the entire network, with each subsidiary operating under
              its own subdomain, creating a unified yet diverse portfolio of
              companies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10", label: "Companies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { number: "9+", label: "Industries", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
              { number: "1", label: "Founder", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { number: "\u221E", label: "Ambition", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="gradient-border rounded-xl p-6 bg-surface hover:bg-surface-2 transition-colors"
              >
                <svg className="w-8 h-8 text-accent mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
                <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
