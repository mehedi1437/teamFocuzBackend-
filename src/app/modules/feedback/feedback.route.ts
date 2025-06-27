import express from 'express';
import { FeedbackController } from './feedback.controller';
import { authenticate } from '../../../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authenticate, FeedbackController.create);

router.get('/:fileId',  FeedbackController.getByFile);
export const feedbackRoutes = router;
