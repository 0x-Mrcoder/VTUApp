// models/admin_role.model.ts
import { Schema, model } from 'mongoose';
import { IAdminRole } from '../types/index.js';

const adminRoleSchema = new Schema<IAdminRole>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const AdminRole = model<IAdminRole>('AdminRole', adminRoleSchema);
