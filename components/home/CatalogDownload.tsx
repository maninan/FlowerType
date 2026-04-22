'use client';

export default function CatalogDownload() {
  return (
    <section id="catalog" className="py-20 bg-emerald-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Product Resources
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Get the Full <br />
              <span className="text-emerald-400">2025 Product Catalog</span>
            </h2>
            <p className="text-slate-300 text-lg mb-0 leading-relaxed">
              Explore highly detailed specifications, comprehensive floor plans, and a complete high-definition image gallery of all our capsule house models. Includes pricing structures and custom branding options.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="/downloads/Catalog.pdf"
              download
              className="btn bg-emerald-500 hover:bg-emerald-400 text-emerald-950 border-0 rounded-2xl px-10 py-4 h-auto text-lg font-bold flex flex-col items-center gap-1 shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <span>Download Catalog</span>
              <span className="text-xs opacity-70 font-medium">PDF</span>
            </a>
            <p className="text-center text-slate-400 text-[10px] mt-4 uppercase tracking-widest font-semibold">
              Updated: April 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
