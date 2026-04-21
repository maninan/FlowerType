// ─────────────────────────────────────────────
// Mongoose Product Model
// ─────────────────────────────────────────────
// This model mirrors the Product type in types/index.ts
// It allows you to store and query products from MongoDB
//
// Note: Mongoose uses 'model' as a reserved method name,
// so we store it in the schema as-is via a plain object.

import mongoose, { Schema, Document } from 'mongoose';
import { Product } from '@/types';

export type ProductDocument = Product & Document;

// Use a plain object schema to avoid TypeScript conflicts with
// Mongoose's built-in 'model' method name
const ProductSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['single', 'double', 'apple', 'specialty'],
      required: true,
    },
    floorArea: { type: String },
    floors: { type: Number },
    guests: { type: String },
    weight: { type: String },
    image: { type: String, required: true },
    images: [{ type: String }],
    specs: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
    badge: { type: String },
    size: { type: String },
    description: { type: String },
    useCase: { type: String },
  },
  { timestamps: true }
);

// Prevent model re-registration in Next.js dev HMR
const ProductModel =
  mongoose.models['Product'] ||
  mongoose.model('Product', ProductSchema);

export default ProductModel;
