import express from 'express';
import { ReportController } from './report.controller';
import { authenticate } from '../../../middlewares/auth.middleware';

const router = express.Router();

router.get('/team-file-counts', authenticate, ReportController.getTeamFileStats);

export const reportRoutes = router;
