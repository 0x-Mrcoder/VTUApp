// models/notification.model.ts
import { Schema, model } from 'mongoose';
import { INotification } from '../types/index.js';

const notificationSchema = new Schema<INotification>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  read_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  action_link: { type: String }
});

export const Notification = model<INotification>('Notification', notificationSchema);
