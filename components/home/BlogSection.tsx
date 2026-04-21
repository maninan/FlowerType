import { BlogPost } from '@/types';
import Image from 'next/image';

const posts: BlogPost[] = [
  {
    id: 'factory-vs-site',
    category: "Founder's Note · Vision",
    title: 'Why we build in a factory, not on a construction site',
    excerpt:
      'Traditional construction is slow and impossible to scale. We asked: what if a quality home could be manufactured like a precision product?',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
    href: '#',
  },
  {
    id: 'resort-demand',
    category: 'Industry · Hospitality',
    title: 'The demand for resort accommodation is growing faster than builders can supply it',
    excerpt:
      'Tourism is recovering globally. Capsule homes deploy in days — here\'s why that changes everything for resort developers.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    href: '#',
  },
  {
    id: 'custom-build',
    category: 'Design Story · Custom',
    title: 'From standard shell to shark capsule — how a custom build works',
    excerpt:
      'A client brief becomes a finished themed capsule home. Walk through a real project from concept to delivery.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    href: '#',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Blog
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-4">
            From the Founders
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Honest writing about why we build this way, what problem we&apos;re
            solving, and where modular living is headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-100 transition-all group"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-emerald-600 text-xs font-semibold mb-3 tracking-wide">
                  {post.category}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0d1b2a] mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="text-emerald-600 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all"
                >
                  Read more <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
