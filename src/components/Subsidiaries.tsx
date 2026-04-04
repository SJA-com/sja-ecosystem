const subsidiaries = [
  {
    name: "SJA Robotics",
    domain: "ai.sja.com",
    description:
      "At the forefront of integrating AI and automation into everyday devices. Home to the Atiana Robot, Sueen Drone, and a suite of smart home innovations.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    borderHover: "hover:border-cyan-400/30",
  },
  {
    name: "SJA Hospitals",
    domain: "care.sja.com",
    description:
      "Revolutionizing healthcare with AI-assisted diagnostics, robotic surgery, and patient care systems that integrate with the Atiana-H platform.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-red-400",
    bg: "bg-red-400/10",
    borderHover: "hover:border-red-400/30",
  },
  {
    name: "SJA Constructions",
    domain: "build.sja.com",
    description:
      "Smart construction and infrastructure development powered by automation, robotics-assisted building, and intelligent project management.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderHover: "hover:border-amber-400/30",
  },
  {
    name: "SJA Education",
    domain: "edu.sja.com",
    description:
      "Transforming learning through AI-powered tutoring, personalized education paths, and smart classroom technologies for students of all ages.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    borderHover: "hover:border-blue-400/30",
  },
  {
    name: "SJA Wear",
    domain: "wear.sja.com",
    description:
      "Fashion meets technology. Smart wearables, tech-integrated clothing, and a fashion line that blends style with innovation.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    borderHover: "hover:border-pink-400/30",
  },
  {
    name: "SJA Move",
    domain: "move.sja.com",
    description:
      "Next-generation transportation solutions including autonomous vehicles, smart logistics, and AI-optimized mobility platforms.",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    color: "text-green-400",
    bg: "bg-green-400/10",
    borderHover: "hover:border-green-400/30",
  },
  {
    name: "SJA Fitness",
    domain: "fit.sja.com",
    description:
      "AI-powered fitness tracking, personalized workout plans, smart gym equipment, and health optimization through data-driven insights.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderHover: "hover:border-emerald-400/30",
  },
  {
    name: "SJA Finance",
    domain: "finance.sja.com",
    description:
      "Intelligent financial services including AI-driven investment analysis, digital banking solutions, and smart financial planning tools.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    borderHover: "hover:border-yellow-400/30",
  },
  {
    name: "SJA Tech",
    domain: "tech.sja.com",
    description:
      "The technology backbone of the SJA ecosystem. Software development, cloud infrastructure, AI/ML research, and platform engineering.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    borderHover: "hover:border-violet-400/30",
  },
  {
    name: "SJA Path",
    domain: "path.sja.com",
    description:
      "Career guidance, mentorship, and personal development platform. Helping individuals discover their path and achieve their full potential through AI-powered coaching.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderHover: "hover:border-teal-400/30",
  },
];

export default function Subsidiaries() {
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
            Each subsidiary operates under its own subdomain of sja.com,
            creating a unified yet diverse portfolio of companies that span
            multiple industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((sub) => (
            <div
              key={sub.domain}
              className={`group rounded-xl bg-surface border border-border ${sub.borderHover} p-6 transition-all hover:bg-surface-2`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${sub.bg} flex items-center justify-center`}
                >
                  <svg
                    className={`w-6 h-6 ${sub.color}`}
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
                </div>
                <span className={`text-xs font-mono ${sub.color} opacity-60`}>
                  {sub.domain}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{sub.name}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {sub.description}
              </p>
            </div>
          ))}
        </div>

        {/* Domain Map */}
        <div className="mt-16 rounded-2xl bg-surface border border-border p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Domain <span className="text-accent">Architecture</span>
            </h3>
            <p className="text-foreground/60 text-sm max-w-xl mx-auto">
              All SJA companies are connected through a unified domain
              structure under <span className="text-accent font-mono">sja.com</span>.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Main domain */}
            <div className="gradient-border rounded-xl px-8 py-4 bg-surface-2 mb-6">
              <div className="text-xl font-bold text-accent font-mono">sja.com</div>
              <div className="text-xs text-foreground/50 text-center mt-1">Main Domain</div>
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-border" />

            {/* Subdomains grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
              {subsidiaries.map((sub) => (
                <div
                  key={sub.domain}
                  className={`rounded-lg bg-surface-2 border border-border px-3 py-2.5 text-center ${sub.borderHover} transition-colors`}
                >
                  <div className={`text-xs font-mono ${sub.color}`}>
                    {sub.domain}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
