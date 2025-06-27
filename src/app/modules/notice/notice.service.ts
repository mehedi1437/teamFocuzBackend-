import { Notice } from "./notice.model";

export const NoticeService = {
  createNotice: async (title: string, message: string) => {
    return await Notice.create({ title, message });
  },

  getAllNotices: async () => {
    return await Notice.find()
      .sort({ createdAt: -1 })
  },
};
