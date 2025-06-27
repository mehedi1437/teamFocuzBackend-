import { Request, Response } from "express";
import { NoticeService } from "./notice.service";

export const NoticeController = {
  create: async (req: Request, res: Response) => {
    try {
      const user = req.user!;

      if (user.role !== "super_admin") {
        return res
          .status(403)
          .json({ message: "Only super admin can post notices" });
      }

      const { title, message } = req.body;
      const notice = await NoticeService.createNotice(
        title,
        message,
      );

      res.status(201).json(notice);
    } catch (error) {
      res.status(500).json({ message: "Failed to create notice", error });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    try {
      const notices = await NoticeService.getAllNotices();
      res.status(200).json(notices);
    } catch (error) {
      res.status(500).json({ message: "Failed to load notices", error });
    }
  },
};
