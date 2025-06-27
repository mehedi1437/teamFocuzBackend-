import { Team } from './team.model';

export const TeamService = {
  createTeam: async (data: any) => {
    return await Team.create(data);
  },

  getAllTeams: async () => {
    return await Team.find();
  },

  deleteTeam: async (id: string) => {
    return await Team.findByIdAndDelete(id);
  },
};
