// models/wallet.model.ts
import { Schema, model } from 'mongoose';
import { IWallet } from '../types/index.js';

const walletSchema = new Schema<IWallet>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'NGN' },
  last_transaction_at: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Wallet = model<IWallet>('Wallet', walletSchema);
