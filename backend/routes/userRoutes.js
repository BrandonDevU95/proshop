import express from 'express';
import { authUser, registerUser, getUersProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUersProfile);
router.route('/').post(registerUser);

export default router;
