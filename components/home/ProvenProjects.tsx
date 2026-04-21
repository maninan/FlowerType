'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'Changzhou Lakeside Resort',
    location: 'Jiangsu, China',
    date: 'March 2024',
    description: 'A cluster of 12 E5 Nova Pods integrated with smart home controls for a premium glamping experience.',
    image: 'https://images.unsplash.com/photo-1544015759-237f4042a8e5?w=800&q=80',
  },
  {
    title: 'Desert Mirage Retreat',
    location: 'Ningxia, China',
    date: 'November 2023',
    description: '8 F5 Dune Pods featuring heat-reflective aluminium shells and custom desert-proof insulation systems.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
  },
  {
    title: 'Mountain Ridge Escape',
    location: 'Sichuan, China',
    date: 'January 2024',
    description: '4 Ridge Cabin F7 units deployed in high-altitude terrain with snow-load rated roofs.',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80',
  },
];

export default function ProvenProjects() {
  return (
    <section id="projects-proven" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Our Experience
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-6">
            Proven Projects
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From industrial manufacturing to on-site deployment, we have successfully delivered high-end modular living solutions across diverse climates and terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200 transition-all shadow-sm hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">{project.location}</p>
                  <p className="text-sm font-medium">{project.date}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-[#0d1b2a] mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-slate-400 text-sm mb-6 italic">Looking for more examples from our portfolio?</p>
          <a
            href="/#catalog"
            className="btn btn-outline border-slate-200 text-slate-600 hover:bg-[#0d1b2a] hover:text-white hover:border-[#0d1b2a] rounded-full px-10 transition-all font-semibold"
          >
            View More in Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
