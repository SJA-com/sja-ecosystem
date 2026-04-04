export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/sja-logo-circle.png"
              alt="SJA Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold">SJA</p>
              <p className="text-xs text-foreground/40">One vision. Many industries. Infinite impact.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-foreground/50 hover:text-accent transition-colors">About</a>
            <a href="#subsidiaries" className="text-sm text-foreground/50 hover:text-accent transition-colors">Companies</a>
            <a href="#vision" className="text-sm text-foreground/50 hover:text-accent transition-colors">Vision</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} SJA. All rights reserved.
          </p>
          <p className="text-accent/60 text-xs font-mono">
            Founded by Syeda Juveria Afreen
          </p>
          <p className="text-xs text-foreground/40 font-mono">sja.com</p>
        </div>
      </div>
    </footer>
  );
}
