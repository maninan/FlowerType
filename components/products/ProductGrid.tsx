'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';

interface Props {
  initialProducts: Product[];
}

const FILTERS = [
  { label: 'All Models', value: 'all' },
  { label: 'Single Floor', value: 'single' },
  { label: 'Double Layer', value: 'double' },
  { label: 'Apple Cabin', value: 'apple' },
  { label: 'Specialty & Sauna', value: 'specialty' },
];

export default function ProductGrid({ initialProducts }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? initialProducts
      : initialProducts.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="section-head reveal text-center mb-14">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-4">
            Space Capsule House Lineup
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every model ships fully furnished with smart controls, panoramic
            glass, and a complete interior. Click any card to see full specs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              id={`filter-${f.value}`}
              onClick={() => setActiveFilter(f.value)}
              className={`btn btn-sm rounded-full border transition-all ${
                activeFilter === f.value
                  ? 'bg-[#0d1b2a] text-white border-[#0d1b2a]'
                  : 'bg-transparent text-slate-600 border-slate-200 hover:border-[#0d1b2a]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      id={`product-${product.slug}`}
      className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 block cursor-pointer"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={`${product.name} capsule house`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="glare-container">
          <div className="glare" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="font-heading text-4xl font-extrabold text-emerald-600 mb-1">
          {product.model}
        </div>
        <div className="font-semibold text-[#0d1b2a] text-lg mb-4">
          {product.name}
        </div>

        <div className="space-y-2 mb-6">
          {[
            { k: 'Floor area', v: product.floorArea },
            { k: 'Floors', v: String(product.floors) },
            { k: 'Guests', v: product.guests },
            { k: 'Weight', v: product.weight },
          ].map(
            ({ k, v }) =>
              v && (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-slate-400">{k}</span>
                  <span className="font-medium text-slate-700">{v}</span>
                </div>
              )
          )}
        </div>

        <div className="text-emerald-600 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
          View Details
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
