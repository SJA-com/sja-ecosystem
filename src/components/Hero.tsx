export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-3xl" />
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
