import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="hero-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
        <div className="max-w-3xl">
          <div className="fadein fadein-1 inline-block bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            Smart Modular Living &middot; Changzhou, China
          </div>

          <h1 className="fadein fadein-2 font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-6">
            Capsule Homes
            <br />
            <span className="text-emerald-400">Delivered Ready</span>
            <br />
            to Live In.
          </h1>

          <p className="fadein fadein-3 text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
            Factory-finished capsule houses for resorts, glamping, residential,
            and commercial projects. Smart controls built in. Shipped anywhere.
          </p>

          <div className="fadein fadein-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#products"
              className="btn bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-full px-8 py-3 text-base font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-600/30"
            >
              Explore Products
            </Link>
            <Link
              href="/#contact"
              className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-[#0d1b2a] rounded-full px-8 py-3 text-base font-semibold transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-widest">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-emerald-500 animate-pulse" />
        Scroll
      </div>
    </section>
  );
}
