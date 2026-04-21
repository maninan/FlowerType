const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Full Interior',
    desc: 'Eco wood floors, marble bathroom, custom vanity, bar area — completely finished.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Smart Home',
    desc: 'Card-access power, voice control, app door lock, multi-scene lighting — all standard.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Ready in Days',
    desc: 'Factory finished and shipped ready. No on-site construction. Move in immediately.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Weather-Proof',
    desc: 'Galvanised steel frame, fluorocarbon aluminium shell, tempered glass — built to last outdoors.',
  },
];

export default function FeaturesStrip() {
  return (
    <div className="bg-[#0d1b2a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-600/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Included in every unit
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-white">
            What You See Is What You Get
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-emerald-500/30 hover:bg-white/8 transition-all"
            >
              <div className="text-emerald-400 mb-5">{f.icon}</div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
