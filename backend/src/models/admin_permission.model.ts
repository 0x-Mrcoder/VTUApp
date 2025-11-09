// models/admin_permission.model.ts
import { Schema, model } from 'mongoose';
import { IAdminPermission } from '../types/index.js';

const adminPermissionSchema = new Schema<IAdminPermission>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const AdminPermission = model<IAdminPermission>('AdminPermission', adminPermissionSchema);
