import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} — Flower Smart Technology`,
    description:
      product.description ||
      `${product.name}: ${product.floorArea}, ${product.guests}. Factory-finished capsule home by Flower Smart Technology.`,
  };
}

const included = [
  'Eco wood flooring throughout',
  'Marble / ceramic tile bathroom, privacy glass door, custom vanity, mirror, toilet, shower',
  'Integrated ceiling & wall modules — standard colour palette',
  'Bar area · full lighting system · full plumbing',
  '2P Midea inverter air conditioning (heating & cooling) + hot water heater',
  'Smart card-access power panel + mobile app door lock',
  'Multi-scene lighting control + voice control',
  'Galvanised steel frame · fluorocarbon aluminium shell · tempered glass doors, windows & skylight',
  'Panoramic balcony (applicable models)',
];

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-slate-400 text-sm mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-slate-300">{product.model}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-800">
              <Image
                src={product.image}
                alt={`${product.name} capsule house`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute top-5 left-5 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-white">
              <div className="font-heading text-7xl font-extrabold text-emerald-400 mb-2">
                {product.model}
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-slate-300 leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Specs */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                <h3 className="font-heading text-lg font-bold text-white mb-4 tracking-wider uppercase">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-slate-400 text-sm">{spec.label}</span>
                      <span className="text-white text-sm font-medium text-right max-w-[60%]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#contact"
                className="btn w-full bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-xl py-3 font-semibold text-base transition-all hover:scale-[1.02]"
              >
                Get a Quote for This Model →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              Standard Equipment
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0d1b2a]">
              Included in Every Unit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex gap-3"
              >
                <div className="text-emerald-500 mt-0.5 flex-shrink-0">✓</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <div className="py-12 bg-white text-center">
        <Link
          href="/#products"
          className="btn btn-outline border-slate-300 text-slate-600 hover:bg-[#0d1b2a] hover:text-white hover:border-[#0d1b2a] rounded-full px-8 transition-all"
        >
          ← Browse All Models
        </Link>
      </div>

      <ContactSection />
    </>
  );
}
