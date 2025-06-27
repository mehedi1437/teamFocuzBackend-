import { Request, Response } from 'express';
import { TeamService } from './team.service';

export const TeamController = {
  createTeam: async (req: Request, res: Response) => {
    try {
      const team = await TeamService.createTeam(req.body);
      res.status(201).json(team);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllTeams: async (req: Request, res: Response) => {
    try {
      const teams = await TeamService.getAllTeams();
      res.status(200).json(teams);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

deleteTeam: async (req: Request, res: Response) => {
  try {
    const deleted = await TeamService.deleteTeam(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json({ message: 'Team deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}


};
