import { Schema, model } from 'mongoose';

const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

export const Notice = model('Notice', noticeSchema);
