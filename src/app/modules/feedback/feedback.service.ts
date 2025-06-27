
import { Feedback } from './feedback.model';
import { Types } from 'mongoose';

export const FeedbackService = {
  createFeedback: async (
    fileId: string,
    userId: string,
    comment: string
  ) => {
    return await Feedback.create({
      file: fileId,
      givenBy: userId,
      comment
    });
  },

    //  Get all feedbacks for one file
  getFeedbacksByFile: async (fileId: string) => {
    return await Feedback.find({ file: fileId }).populate('givenBy', 'name role');
  }
};
