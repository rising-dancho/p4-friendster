import { Router } from 'express';
import {
  getAllProfile,
  getProfile,
  postProfile,
  deleteProfile,
  updateProfile,
} from '../controllers/profile.controller.js';

// initialize router
const router = Router();

router.get('/', getAllProfile);
router.get('/:id', getProfile);
router.post('/', postProfile);
router.delete('/:id', deleteProfile);
router.patch('/:id', updateProfile);

export default router;
