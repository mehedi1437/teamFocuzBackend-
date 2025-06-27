import express from 'express';
import { NoticeController } from './notice.controller';
import { authenticate } from '../../../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authenticate, NoticeController.create); // ✅ Only Super Admin
router.get('/',  NoticeController.getAll);  // ✅ All users can view

export const noticeRouter= router;
