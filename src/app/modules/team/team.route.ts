import { Router } from 'express';
import { TeamController } from './team.controller';
import { authorize } from '../../../middlewares/role.middleware';
import { authenticate } from '../../../middlewares/auth.middleware';
import { validateObjectId } from '../../../middlewares/validateObjectId.middleware';

const router = Router();

router.post('/', authenticate, authorize(['super-admin']), TeamController.createTeam);
router.get('/', authenticate, TeamController.getAllTeams);
router.delete('/:id', authenticate, authorize(['super-admin']),validateObjectId, TeamController.deleteTeam);

export const TeamRoutes = router;
