import express from 'express';

import { verifyToken } from '../Utils/verifyUser.js';
import { getAllConsultantsController, getAllUsersController, consultantApprove, getAllConsultations } from '../controllers/admin.controller.js';
const router = express.Router();

router.get('/getAllUsers', verifyToken, getAllUsersController);
router.get('/getAllConsultants', verifyToken, getAllConsultantsController);
router.post('/consultantapprove', verifyToken, consultantApprove)
router.get('/getAllConsultations', verifyToken, getAllConsultations);

export default router;