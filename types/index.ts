// ─────────────────────────────────────────────
// Shared TypeScript Types for FlowerType
// ─────────────────────────────────────────────

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  _id?: string;
  slug: string;          // e.g. "e3-orbit-cabin"
  model: string;         // e.g. "E3"
  name: string;          // e.g. "Orbit Cabin — 2 Floor Flagship"
  category: 'single' | 'double' | 'apple' | 'specialty';
  floorArea: string;     // e.g. "50 ㎡"
  floors: number;
  guests: string;        // e.g. "3–4 people"
  weight: string;        // e.g. "9,000 kg"
  image: string;         // URL or /images/products/slug.jpg
  images?: string[];     // gallery images
  specs: ProductSpec[];
  featured?: boolean;
  badge?: string;        // e.g. "Most Popular"
  size?: string;
  description?: string;
  useCase?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  product: string;
  units: string;
  message: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
}
