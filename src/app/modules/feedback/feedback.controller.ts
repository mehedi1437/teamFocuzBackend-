import { Request, Response } from 'express';
import { FeedbackService } from './feedback.service';

export const FeedbackController = {
  create: async (req: Request, res: Response) => {
    try {
      const user = req.user!;
      const { fileId, comment } = req.body;

      if (
        user.role !== 'super_admin' &&
        user.role !== 'team_manager'
      ) {
        return res.status(403).json({ message: 'Permission denied' });
      }

      const feedback = await FeedbackService.createFeedback(
        fileId,
        user.userId!,
        comment
      );

      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit feedback', error });
    }
  }
,
    // ✅ Get feedbacks for specific file
  getByFile: async (req: Request, res: Response) => {
    try {
      const { fileId } = req.params;
      const feedbacks = await FeedbackService.getFeedbacksByFile(fileId);

      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: 'Failed to load feedbacks', error });
    }
  }
};
