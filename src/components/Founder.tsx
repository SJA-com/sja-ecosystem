import Image from "next/image";

const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sja-thedude/",
    icon: (
      <path
        fill="currentColor"
        stroke="none"
        d="M4 9h3v11H4V9zm1.5-5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM10 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.66 2 3.66 4.7V20h-3v-5.6c0-1.3 0-3-1.85-3s-2.1 1.45-2.1 2.9V20h-3V9z"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sja_thedude",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/sjathedude",
    icon: <path d="M21 4L3 11.2l6.2 2.1L11.5 20l3.2-4.3 4.8 3.6L21 4zM9.2 13.3L18 6.8" />,
  },
  {
    label: "Personal Site",
    href: "http://ceo.sjapathway.com/",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
      </>
    ),
  },
];

const facts = [
  { value: "5", suffix: "+", label: "Years in IT" },
  { value: "4", suffix: "", label: "Countries collaborated with" },
  { value: "300", suffix: "+", label: "Career inquiries" },
];

const education = [
  {
    degree: "Master of Engineering in Robotics",
    note: "Combining software expertise with a focus on AI and intelligent systems",
    status: "Pursuing",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    note: "",
    status: "Completed",
  },
];

const roles = [
  "Tech Support Engineer",
  "Senior Software Engineer",
  "Lead Software Engineer",
  "CTO",
];

const regions = ["USA", "France", "Australia", "UK"];

const creative = ["Game Developer", "Content Writer", "Content Creator"];

function CardHeading({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </span>
      <h3 className="text-lg font-bold">{children}</h3>
    </div>
  );
}

export default function Founder() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div data-reveal="line" className="section-line absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-accent/5 rounded-full blur-3xl animate-drift" />
        <div
          className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-accent-3/5 rounded-full blur-3xl animate-drift"
          style={{ "--duration": "24s", animationDirection: "reverse" } as React.CSSProperties}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p data-reveal="" className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Meet the Founder
          </p>
          <h2 data-reveal="" style={stagger(1)} className="text-4xl sm:text-5xl font-bold mb-4">
            The Founder of <span className="text-accent whitespace-nowrap">SJA Inc.</span>
          </h2>
          <p data-reveal="" style={stagger(2)} className="text-foreground/60 max-w-2xl mx-auto">
            SJA Inc. is the parent company of SJA Pathway, SJA Verse and SJA
            Robotics &mdash; one founder, three companies, built on engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div data-reveal="left" className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-2/10 to-transparent blur-2xl animate-glow-pulse pointer-events-none"
                aria-hidden="true"
              />
              <div className="group gradient-border relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface">
                <Image
                  src="/sja_pic.jpeg"
                  alt="Syeda Juveria Afreen, Founder of SJA Inc."
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 384px, 40vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">Syeda Juveria Afreen</p>
                  <p className="text-sm text-accent font-mono mt-1">Founder, SJA Inc.</p>
                  <p className="text-xs text-foreground/60 mt-0.5">Founder &amp; CEO, SJA Pathway</p>
                </div>
              </div>

              <ul className="flex items-center justify-center gap-3 mt-6" aria-label="Founder social links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="lift w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/60 transition-[color,border-color,transform] duration-200 ease-out"
                    >
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {s.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p data-reveal="right">
                I&apos;m <strong className="text-foreground">Syeda Juveria Afreen</strong>, founder of{" "}
                <strong className="text-foreground">SJA Inc.</strong>, the parent company of SJA Pathway,
                SJA Verse and SJA Robotics, and Founder &amp; CEO of{" "}
                <strong className="text-foreground">SJA Pathway</strong>{" "}&mdash; a platform dedicated to
                helping individuals unlock global career opportunities and build strong professional
                identities.
              </p>
              <p data-reveal="right" style={stagger(1)}>
                With over 5 years of experience in the IT industry, I&apos;ve worked across roles
                including Tech Support Engineer, Senior Software Engineer, Lead Software Engineer, and
                CTO, collaborating with teams across the USA, France, Australia, and the UK.
              </p>
              <p data-reveal="right" style={stagger(2)}>
                Currently, I serve as the Product &amp; Engineering Lead at{" "}
                <span className="text-accent font-mono">map.ca</span>, contributing to impactful,
                community-driven technology solutions.
              </p>
              <p data-reveal="right" style={stagger(3)}>
                Beyond engineering, I&apos;m also a Game Developer, Content Writer, and Content Creator,
                passionate about innovation, storytelling, and empowering others to grow with clarity,
                confidence, and purpose.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
              {facts.map((f, i) => (
                <div key={f.label} data-reveal="scale" style={stagger(i)}>
                  <div className="gradient-border lift glow h-full rounded-xl bg-surface p-4 sm:p-5 text-center">
                    <div className="stat-number text-2xl sm:text-3xl font-bold text-accent">
                      <span data-count={f.value}>{f.value}</span>
                      {f.suffix}
                    </div>
                    <div className="text-[11px] sm:text-xs text-foreground/50 mt-1">{f.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {/* Education */}
              <div data-reveal="" style={stagger(0)}>
                <div className="lift glow h-full rounded-xl bg-surface border border-border p-6 hover:border-accent/30 transition-[border-color,transform] duration-200 ease-out">
                  <CardHeading icon="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.08 12.08 0 0118.8 17.5 11.95 11.95 0 0012 20.06a11.95 11.95 0 00-6.8-2.56 12.08 12.08 0 01.64-6.92L12 14zm-4 6v-7.5l4-2.22">
                    Education
                  </CardHeading>
                  <ol className="relative border-l border-border ml-1 space-y-5">
                    {education.map((e) => (
                      <li key={e.degree} className="pl-5 relative">
                        <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-foreground text-sm">{e.degree}</h4>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 rounded-full px-2 py-0.5">
                            {e.status}
                          </span>
                        </div>
                        {e.note && <p className="text-xs text-foreground/50 mt-1 leading-relaxed">{e.note}</p>}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Experience */}
              <div data-reveal="" style={stagger(1)}>
                <div className="lift glow h-full rounded-xl bg-surface border border-border p-6 hover:border-accent/30 transition-[border-color,transform] duration-200 ease-out">
                  <CardHeading icon="M21 13.26V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.74M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3 7h18v4a17.9 17.9 0 01-9 2.4A17.9 17.9 0 013 11V7zm9 4v.01">
                    Experience
                  </CardHeading>
                  <ol className="relative border-l border-border ml-1 space-y-5">
                    <li className="pl-5 relative">
                      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-green-500 animate-blink-green" />
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-foreground text-sm">Product &amp; Engineering Lead, map.ca</h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-green-400 border border-green-400/30 bg-green-400/10 rounded-full px-2 py-0.5">
                          Current
                        </span>
                      </div>
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                      <h4 className="font-semibold text-foreground text-sm">5+ years in the IT industry</h4>
                      <ul className="flex flex-wrap gap-1.5 mt-2" aria-label="Roles held">
                        {roles.map((r) => (
                          <li key={r} className="text-[11px] text-foreground/70 bg-surface-2 border border-border rounded-md px-2 py-1">
                            {r}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-foreground/50 mt-2">
                        Teams across {regions.join(", ")}
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div data-reveal="" style={stagger(2)} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-foreground/40 mr-1">Beyond engineering</span>
              {creative.map((c) => (
                <span key={c} className="text-xs text-accent border border-accent/30 bg-accent/5 rounded-full px-3 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Origin story */}
        <div data-reveal="scale" className="mt-16 gradient-border rounded-2xl bg-surface p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Why I Started <span className="text-accent">SJA Pathway</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground/70 leading-relaxed text-sm sm:text-base">
            <p>
              Throughout my career journey, I faced numerous challenges &mdash; especially during my job
              search. With no one to guide me, I experienced the frustration of navigating everything
              alone. This struggle inspired me to create SJA Pathway &mdash; a platform dedicated to
              supporting job seekers with personalized guidance, resume reviews, and strategic advice.
            </p>
            <p>
              Over the past 2 years, I&apos;ve received more than 300 inquiries from individuals seeking
              career support. This overwhelming response motivated me to establish SJA Pathway as a
              structured platform where I can offer focused mentorship and practical tools to help job
              seekers succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
