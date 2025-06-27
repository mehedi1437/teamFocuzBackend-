import { TUser } from "../user/user.interface";
import { ProjectFile } from "./file.model";

export const FileService = {
  uploadFile: async (data: any) => {
    return await ProjectFile.create(data);
  },

  getFiles: async () => {
    return await ProjectFile.find();
  },

  getFilesByRole: async (user: TUser) => {
    console.log("🔥 User Info from req.user:", user);
    const query: any = {};
    if (user.role === "team_member" && user.category === "voice_artist") {
      query.category = "script";
      return await ProjectFile.find(query);
    }
   

    if (user.role === "team_member") {
      if (user.category === "video_editor") {
        query.$or = [
          { uploadedBy: user._id },
          { category: { $in: ["script", "voice"] } },
        ];
      } else if (user.category === "script_writer") {
        query.category = "video";
      } else if (user.category === "voice_artist") {
        query.category = "script"; // ✅ শুধু স্ক্রিপ্ট
      }
    } else if (user.role === "team_manager") {
      query.team = user.team;
    }

    // Super Admin = সব দেখতে পাবে
    console.log("Query:", query);
    return await ProjectFile.find(query);
  },
};
