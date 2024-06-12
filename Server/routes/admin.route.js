import express from 'express';

import { verifyToken } from '../Utils/verifyUser.js';
import { getAllConsultantsController, getAllUsersController } from '../controllers/admin.controller.js';
const router = express.Router();

router.get('/getAllUsers', verifyToken, getAllUsersController);
router.get('/getAllConsultants', verifyToken, getAllConsultantsController);

export default router;