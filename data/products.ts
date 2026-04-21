// ─────────────────────────────────────────────
// Static Product Data — Single source of truth
// ─────────────────────────────────────────────
// To change product images:
//   1. Put your image in /public/images/products/
//   2. Update the `image` field below to `/images/products/your-file.jpg`
//   3. For multiple gallery images, add to the `images` array
// ─────────────────────────────────────────────

import { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'e3-orbit-cabin',
    model: 'E3',
    name: 'Orbit Cabin — 2 Floor Flagship',
    category: 'double',
    floorArea: '50 ㎡',
    floors: 2,
    guests: '3–4 people',
    weight: '9,000 kg',
    // ↓ CHANGE THIS to your own image path, e.g. '/images/products/e3-orbit.jpg'
    image: '/Volumes/KINGSTON/Website/FlowerType/flowertype-next/public/images/home.jpg',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
    ],
    size: 'F1: L 11,500 × W 3,300 × H 3,200 mm | F2: L 8,500 × W 3,300 × H 3,200 mm',
    description: 'The E3 Orbit Cabin is our two-floor flagship — a fully finished double-storey capsule home with panoramic views, smart home controls, and a complete premium interior.',
    specs: [
      { label: 'Floor 1 Size', value: 'L 11,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor 2 Size', value: 'L 8,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '50 ㎡' },
      { label: 'Floors', value: '2' },
      { label: 'Guests', value: '3–4 people' },
      { label: 'Weight', value: '9,000 kg' },
    ],
  },
  {
    slug: 'e5-nova-pod',
    model: 'E5',
    name: 'Nova Pod — Compact Single Floor',
    category: 'single',
    floorArea: '28 ㎡',
    floors: 1,
    guests: '2 people',
    weight: '6,000 kg',
    featured: true,
    badge: 'Most Popular',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80',
    ],
    size: 'L 8,500 × W 3,300 × H 3,200 mm',
    description: 'The Nova Pod is our most popular compact single-floor capsule — perfect for glamping, resort accommodation, and residential use.',
    specs: [
      { label: 'Size', value: 'L 8,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '28 ㎡' },
      { label: 'Floors', value: '1' },
      { label: 'Guests', value: '2 people' },
      { label: 'Weight', value: '6,000 kg' },
    ],
  },
  {
    slug: 'e7-stellar-lodge',
    model: 'E7',
    name: 'Stellar Lodge — Spacious Single',
    category: 'single',
    floorArea: '38 ㎡',
    floors: 1,
    guests: '2–4 people',
    weight: '7,000 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&q=80',
    ],
    size: 'L 11,500 × W 3,300 × H 3,200 mm',
    description: 'The Stellar Lodge offers generous single-floor space with full premium interior — ideal for families and groups.',
    specs: [
      { label: 'Size', value: 'L 11,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '38 ㎡' },
      { label: 'Floors', value: '1' },
      { label: 'Guests', value: '2–4 people' },
      { label: 'Weight', value: '7,000 kg' },
    ],
  },
  {
    slug: 'f5-dune-pod',
    model: 'F5',
    name: 'Dune Pod — Desert Edition',
    category: 'single',
    floorArea: '28 ㎡',
    floors: 1,
    guests: '2 people',
    weight: '6,000 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80',
    ],
    size: 'L 8,500 × W 3,300 × H 3,200 mm',
    description: 'Designed for desert and arid climates — the Dune Pod features heat-reflective aluminium shell and enhanced insulation.',
    specs: [
      { label: 'Size', value: 'L 8,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '28 ㎡' },
      { label: 'Floors', value: '1' },
      { label: 'Guests', value: '2 people' },
      { label: 'Weight', value: '6,000 kg' },
    ],
  },
  {
    slug: 'f7-ridge-cabin',
    model: 'F7',
    name: 'Ridge Cabin — Mountain Edition',
    category: 'single',
    floorArea: '38 ㎡',
    floors: 1,
    guests: '2–4 people',
    weight: '7,000 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
    ],
    size: 'L 11,500 × W 3,300 × H 3,200 mm',
    description: 'Built for mountain terrains — the Ridge Cabin features reinforced snow-load rated roof and enhanced thermal insulation.',
    specs: [
      { label: 'Size', value: 'L 11,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '38 ㎡' },
      { label: 'Floors', value: '1' },
      { label: 'Guests', value: '2–4 people' },
      { label: 'Weight', value: '7,000 kg' },
    ],
  },
  {
    slug: 'zenith-twin-double-layer',
    model: 'ZENITH',
    name: 'Zenith Twin — Double Layer Cluster',
    category: 'double',
    floorArea: '3×3 units',
    floors: 2,
    guests: '4 people',
    weight: '7,000 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80',
    ],
    description: 'The Zenith Twin is a modular double-layer cluster configuration — perfect for resort villages and larger developments.',
    specs: [
      { label: 'Configuration', value: '3×3 units' },
      { label: 'Size per unit', value: 'L 11,500×3 × W 3,200×3 × H 3,200×3 mm' },
      { label: 'Floors', value: '2' },
      { label: 'Guests', value: '4 people' },
      { label: 'Weight', value: '7,000 kg' },
    ],
  },
  {
    slug: 'n7-forest-cabin',
    model: 'N7',
    name: 'Forest Cabin — Apple Series',
    category: 'apple',
    floorArea: '38 ㎡',
    floors: 1,
    guests: '2–4 people',
    weight: '7,000 kg',
    // ↓ CHANGE THIS to your own image path
    image: '/images/products/apple_cabin.png',
    images: ['/images/products/apple_cabin.png'],
    size: 'L 11,500 × W 3,300 × H 3,200 mm',
    useCase: 'Glamping · Resort · Residential',
    description: 'The Forest Cabin N7 features the signature Apple-shaped curved shell — a unique design perfect for eco-resorts and premium glamping.',
    specs: [
      { label: 'Size', value: 'L 11,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '38 ㎡' },
      { label: 'Guests', value: '2–4 people' },
      { label: 'Weight', value: '7,000 kg' },
      { label: 'Customisable', value: 'Layout, exterior & interior' },
    ],
  },
  {
    slug: 'h7-meadow-pod',
    model: 'H7',
    name: 'Meadow Pod — Apple Series',
    category: 'apple',
    floorArea: '38 ㎡',
    floors: 1,
    guests: '2–4 people',
    weight: '7,500 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=900&q=80',
    ],
    size: 'L 11,500 × W 3,300 × H 3,200 mm',
    useCase: 'Glamping · Resort · Tea Room',
    description: 'The Meadow Pod H7 brings the Apple Cabin aesthetic to meadow and grassland settings with a custom curved shell.',
    specs: [
      { label: 'Size', value: 'L 11,500 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '38 ㎡' },
      { label: 'Guests', value: '2–4 people' },
      { label: 'Weight', value: '7,500 kg' },
      { label: 'Customisable', value: 'Layout, exterior & interior' },
    ],
  },
  {
    slug: 'h3-steam-pod',
    model: 'H3',
    name: 'Steam Pod — Sauna Edition',
    category: 'specialty',
    floorArea: '20 ㎡',
    floors: 1,
    guests: '2 people',
    weight: '4,500 kg',
    // ↓ CHANGE THIS to your own image path
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
    ],
    size: 'L 5,800 × W 3,300 × H 3,200 mm',
    useCase: 'Sauna · Wellness · Spa',
    description: 'The Steam Pod H3 is purpose-built for sauna and wellness use — featuring steam-resistant materials, integrated heating, and a private deck.',
    specs: [
      { label: 'Size', value: 'L 5,800 × W 3,300 × H 3,200 mm' },
      { label: 'Floor Area', value: '20 ㎡' },
      { label: 'Guests', value: '2 people' },
      { label: 'Weight', value: '4,500 kg' },
      { label: 'Use Case', value: 'Sauna · Wellness · Spa' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}
