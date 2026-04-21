import Link from 'next/link';

const options = [
  {
    title: 'Layout & Floor Plan',
    desc: 'Room divisions, open-plan vs. partitioned, double-layer clusters — all adjustable.',
  },
  {
    title: 'Exterior Design',
    desc: 'Custom colours, branded shell panels, themed shapes (Shark Capsule, Apple Cabin, and more).',
  },
  {
    title: 'Interior Fit-Out',
    desc: 'Flooring, tile selection, vanity style, lighting packages, furniture layout — your choice.',
  },
  {
    title: 'Use Case',
    desc: 'Glamping · Residential · Commercial · Sauna & Wellness · Tea Room · Pop-up Retail.',
  },
];

export default function CustomizeSection() {
  return (
    <section id="customize" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Customization
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-5">
              Built to
              <br />
              Your Brief
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
              Our standard models are the starting point. We adjust the layout,
              exterior finish, interior configuration, and use case to match
              your project — from a resort glamping pod to a branded tea room.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {options.map((opt) => (
                <div
                  key={opt.title}
                  className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <h3 className="font-semibold text-[#0d1b2a] mb-1 text-sm">{opt.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="btn bg-[#0d1b2a] hover:bg-emerald-700 text-white border-0 rounded-full px-8 transition-all hover:scale-105"
            >
              Discuss Your Project →
            </Link>
          </div>

          {/* Visual */}
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-[#0d1b2a] to-[#1a3a2a] flex items-end p-8 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=70')",
                }}
              />
              <div className="relative z-10">
                <p className="text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-2">
                  Custom Builds
                </p>
                <p className="text-white text-2xl font-heading font-bold leading-tight">
                  Shark Capsule &amp; Tea Room
                  <br />
                  builds available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
