import { Request, Response } from 'express';
import { ReportService } from './report.service';

export const ReportController = {
  getTeamFileStats: async (_req: Request, res: Response) => {
    try {
      const data = await ReportService.getTeamFileStats();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch team file stats', error });
    }
  }
};
