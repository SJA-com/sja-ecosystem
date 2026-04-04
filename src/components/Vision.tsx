export default function Vision() {
  return (
    <section id="vision" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Our Vision
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Future of{" "}
            <span className="text-accent">SJA</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            SJA is more than a collection of companies &mdash; it&apos;s a
            movement towards a smarter, more efficient future where innovation
            knows no bounds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Cross-Industry Synergy",
              description:
                "Each SJA subsidiary strengthens the others. Robotics powers healthcare. Tech enables education. AI drives fitness and finance. Together, they create something greater than the sum of their parts.",
              icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
            },
            {
              title: "Global Expansion",
              description:
                "From its roots in innovation, SJA plans to expand each subsidiary globally, bringing intelligent solutions to communities worldwide and setting new standards in every industry we enter.",
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
            },
            {
              title: "People First",
              description:
                "Every product, every service, every company under SJA exists to empower people. Whether it's a robot that helps at home, a platform that guides your career, or tech that keeps you healthy.",
              icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-surface border border-border p-8 hover:border-accent/30 transition-all"
            >
              <svg
                className="w-10 h-10 text-accent mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={item.icon}
                />
              </svg>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder quote */}
        <div className="gradient-border rounded-2xl bg-surface p-8 sm:p-12 text-center">
          <blockquote className="text-xl sm:text-2xl text-foreground/70 italic leading-relaxed max-w-3xl mx-auto mb-6">
            &ldquo;SJA isn&apos;t just a brand &mdash; it&apos;s a promise to
            innovate relentlessly, to build solutions that matter, and to
            create a future where technology serves everyone.&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-foreground">Syeda Juveria Afreen</p>
            <p className="text-sm text-accent/60 font-mono">Founder, SJA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
