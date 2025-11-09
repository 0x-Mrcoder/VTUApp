// models/role_permission.model.ts
import { Schema, model } from 'mongoose';
import { IRolePermission } from '../types/index.js';

const rolePermissionSchema = new Schema<IRolePermission>({
  role_id: { type: Schema.Types.ObjectId, ref: 'AdminRole', required: true },
  permission_id: { type: Schema.Types.ObjectId, ref: 'AdminPermission', required: true }
});

export const RolePermission = model<IRolePermission>('RolePermission', rolePermissionSchema);
