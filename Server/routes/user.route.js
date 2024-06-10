import express from 'express';
import { applyConsultant, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.post('/applyconsultant', verifyToken, applyConsultant)

export default router;