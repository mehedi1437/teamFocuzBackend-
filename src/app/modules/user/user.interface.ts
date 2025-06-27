import { Types } from "mongoose";

export type UserRole = 'super_admin' | 'team_manager' | 'team_member';
export type MemberCategory = 'video_editor' | 'script_writer' | 'voice_artist';
export type TUser = {
  _id?: Types.ObjectId;
  userId?: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
   category?: MemberCategory;
  team?: Types.ObjectId | null;
  createdAt?: Date;
  updatedAt?: Date;
};