import { Router } from 'express';
import { FileController } from './file.controller';
import { upload } from '../../config/multer';
import { authenticate } from '../../../middlewares/auth.middleware';

const router = Router();

router.post(
  '/upload',
  authenticate,
  upload.single('file'),
  FileController.upload
);

router.get('/', authenticate, FileController.getFiles);

export const FileRoutes = router;
