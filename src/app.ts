import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { TeamRoutes } from './app/modules/team/team.route';
import { FileRoutes } from './app/modules/file/file.route';
import { feedbackRoutes } from './app/modules/feedback/feedback.route';
import { noticeRouter } from './app/modules/notice/notice.route';
import { reportRoutes } from './app/modules/report/report.route';

const app: Application = express();

// parsher
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/auth', AuthRoutes);
app.use('/api/teams', TeamRoutes);
app.use('/api/files', FileRoutes);
app.use('/uploads', express.static('uploads')); 
app.use('/api/feedbacks',feedbackRoutes);
app.use('/api/notices', noticeRouter);
app.use('/api/reports', reportRoutes);


app.get('/', (req: Request, res: Response) => {
 

  res.send('Team is running');
});

export default app;
