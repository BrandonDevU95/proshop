import express from 'express';
import {
	authUser,
	registerUser,
	getUersProfile,
	updateUersProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUersProfile).put(protect, updateUersProfile);

export default router;
