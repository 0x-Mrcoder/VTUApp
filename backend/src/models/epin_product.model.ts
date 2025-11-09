// models epin_product.model.ts
import { Schema, model } from 'mongoose';
import { IEPinProduct } from '../types/index.js';

const epinProductSchema = new Schema<IEPinProduct>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const EPinProduct = model<IEPinProduct>('EPinProduct', epinProductSchema);
