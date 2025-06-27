
import mongoose from 'mongoose';
import { ProjectFile } from '../file/file.model';

export const ReportService = {
  getTeamFileStats: async () => {
    const result = await ProjectFile.aggregate([
      {
        $group: {
          _id: { team: '$team', category: '$category' },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: '$_id.team',
          countsByCategory: {
            $push: {
              category: '$_id.category',
              count: '$count'
            }
          }
        }
      },
      {
        $lookup: {
          from: 'teams',
          localField: '_id',
          foreignField: '_id',
          as: 'teamInfo'
        }
      },
      {
        $unwind: '$teamInfo'
      },
      {
        $project: {
          team: '$teamInfo.name',
          countsByCategory: 1
        }
      }
    ]);

    return result;
  }
};
