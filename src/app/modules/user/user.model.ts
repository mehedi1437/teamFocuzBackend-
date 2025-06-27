import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "team_member",
        "team_manager",
        "super_admin",
      ],
      required: true,
    },
    category:{type: String,
      enum: [
        "video_editor",
        "script_writer",
        "voice_artist",
      ],},
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
  },
  { timestamps: true }
);

export const User = model<TUser>("User", userSchema);
