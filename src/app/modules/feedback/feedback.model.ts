// src/app/modules/feedback/feedback.model.ts

import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema(
  {
    file: {
      type: Schema.Types.ObjectId,
      ref: 'ProjectFile',
      required: true
    },
    givenBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Feedback = model('Feedback', feedbackSchema);
