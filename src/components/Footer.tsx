const companies = [
  { name: "SJA Path", domain: "path.sja.com" },
  { name: "SJA Robotics", domain: "robotics.sja.com" },
  { name: "SJA Care", domain: "care.sja.com" },
  { name: "SJA Constructions", domain: "build.sja.com" },
  { name: "SJA Education", domain: "edu.sja.com" },
  { name: "SJA Wear", domain: "wear.sja.com" },
  { name: "SJA Move", domain: "move.sja.com" },
  { name: "SJA Fitness", domain: "fit.sja.com" },
  { name: "SJA Finance", domain: "finance.sja.com" },
  { name: "SJA Food", domain: "food.sja.com" },
  { name: "SJA Travel", domain: "travel.sja.com" },
  { name: "SJA Realty", domain: "realty.sja.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-bold text-white text-sm">
                SJA
              </div>
              <span className="text-lg font-bold">sja.com</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-4">
              One vision. Many industries. Infinite impact.
            </p>
            <p className="text-accent/60 text-xs font-mono">
              Founded by Syeda Juveria Afreen
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Companies", href: "#subsidiaries" },
                { label: "Vision", href: "#vision" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground/50 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Companies</h4>
            <ul className="space-y-2">
              {companies.slice(0, 6).map((c) => (
                <li key={c.domain}>
                  <span className="text-sm text-foreground/50">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {companies.slice(6).map((c) => (
                <li key={c.domain}>
                  <span className="text-sm text-foreground/50">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} SJA. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40 font-mono">sja.com</p>
        </div>
      </div>
    </footer>
  );
}
