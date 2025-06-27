import { Types } from "mongoose";


export type FileCategory = 'video' | 'script' | 'voice';

export type TProjectFile = {
  title: string;
  fileUrl: string;
  uploadedBy: Types.ObjectId; // userId
  category: FileCategory;
  team?: Types.ObjectId; // teamId
  originalName: string;
  mimeType: string;
}
