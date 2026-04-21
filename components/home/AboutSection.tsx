import Link from 'next/link';

const values = [
  {
    title: 'Factory-finished quality.',
    desc: 'No on-site construction surprises — what you see in the showroom is what arrives.',
  },
  {
    title: 'Smart by default.',
    desc: 'Smart home technology is standard on every model, not an add-on.',
  },
  {
    title: 'Fully customisable.',
    desc: 'From a standard shell to a fully themed bespoke build — we match your brief.',
  },
  {
    title: 'Global export ready.',
    desc: 'We ship internationally and support international clients end to end.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Stack */}
          <div className="reveal relative h-[480px] hidden lg:block">
            <div
              className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=70')",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl bg-cover bg-center shadow-2xl border-4 border-white"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1560440021-33f9b867899d?w=600&q=70')",
              }}
            />
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              About Us
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0d1b2a] mb-5">
              Jiangsu Flower Smart <br />Technology Co., Ltd
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              We design, manufacture, and deliver fully finished capsule homes
              from our factory in Changzhou, Jiangsu, China. Every unit leaves
              our facility complete, furnished, and ready to live in the moment
              it arrives on site.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our team covers the full pipeline — research &amp; development,
              precision manufacturing, and both domestic and international sales
              networks. We work with resort developers, glamping operators,
              residential buyers, and commercial clients worldwide.
            </p>

            <ul className="space-y-4 mb-10">
              {values.map((v) => (
                <li key={v.title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#0d1b2a]">{v.title}</span>{' '}
                    <span className="text-slate-500 text-sm">{v.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="btn btn-outline border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white rounded-full px-8 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
