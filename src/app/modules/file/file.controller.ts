import { Request, Response } from 'express';
import { FileService } from './file.service';
import { TUser } from '../user/user.interface';

export const FileController = {
  upload: async (req: Request, res: Response) => {
    try {
      const file = req.file;
      const user = req.user as any;
      const { title, category } = req.body;

      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const saved = await FileService.uploadFile({
        title,
        category,
        fileUrl: `/uploads/${file.filename}`,
        originalName: file.originalname,
        mimeType: file.mimetype,
        uploadedBy: user.userId,
        team: user.team || null, 
      });

      res.status(201).json(saved);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  getFiles: async (req: Request, res: Response) => {
  const user = req.user as any;
  const files = await FileService.getFilesByRole(user);
  res.status(200).json(files);
}
};
