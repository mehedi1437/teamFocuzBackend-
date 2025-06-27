import { Schema, model } from 'mongoose';
import { TTeam } from './team.interface';

const teamSchema = new Schema<TTeam>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const Team = model<TTeam>('Team', teamSchema);
