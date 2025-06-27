import { Schema, model } from 'mongoose';
import { TProjectFile } from './file.interface';

const fileSchema = new Schema<TProjectFile>(
  {
    title: { type: String, required: true },
    fileUrl: { type: String, required: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, enum: ['video', 'script', 'voice'], required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team',  },
    originalName: String,
    mimeType: String,
  },
  { timestamps: true }
);

export const ProjectFile = model<TProjectFile>('ProjectFile', fileSchema);
