// ─────────────────────────────────────────────
// API Route: GET /api/products
// Returns products from MongoDB, falls back to static data
// ─────────────────────────────────────────────

import { NextResponse } from 'next/server';
import { products as staticProducts } from '@/data/products';

export async function GET() {
  // If no MONGODB_URI, return static data
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(staticProducts);
  }

  try {
    const { connectDB } = await import('@/lib/mongodb');
    const ProductModel = (await import('@/models/Product')).default;

    await connectDB();
    const dbProducts = await ProductModel.find({}).lean();

    // If DB is empty, return static data
    if (!dbProducts || dbProducts.length === 0) {
      return NextResponse.json(staticProducts);
    }

    return NextResponse.json(dbProducts);
  } catch (error) {
    console.error('Products API error, falling back to static data:', error);
    return NextResponse.json(staticProducts);
  }
}
