const companies = [
  { name: "SJA Path", link: "https://sjapathway.com" },
  { name: "SJA Robotics", link: "https://sja-robotics.netlify.app/" },
  { name: "SJA Care", link: "https://sja-care.netlify.app/" },
  { name: "SJA Constructions", link: "https://sja-build.netlify.app/" },
  { name: "SJA Education", link: "https://sja-edu.netlify.app/" },
  { name: "SJA Wear", link: "https://sja-wear.netlify.app/" },
  { name: "SJA Move", link: "https://sja-move.netlify.app/" },
  { name: "SJA Fitness", link: "https://sja-fit.netlify.app/" },
  { name: "SJA Finance", link: "https://sja-finance.netlify.app/" },
  { name: "SJA Food", link: "https://sja-food.netlify.app/" },
  { name: "SJA Travel", link: "https://sja-travel.netlify.app/" },
  { name: "SJA Realty", link: "https://sja-realty.netlify.app/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/sja-logo-circle.png"
                alt="SJA Logo"
                width={36}
                height={36}
                className="rounded-full"
              />
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
                <li key={c.name}>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 hover:text-accent transition-colors">{c.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {companies.slice(6).map((c) => (
                <li key={c.name}>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 hover:text-accent transition-colors">{c.name}</a>
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
