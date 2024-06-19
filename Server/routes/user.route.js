import express from 'express';
import { applyConsultant, test, updateUser, getAllNotification, bookAppointment, getAllConsultantion } from '../controllers/user.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.post('/applyconsultant', verifyToken, applyConsultant)
router.post("/get-all-notification", verifyToken, getAllNotification);
router.post("/get-all-consultations", verifyToken, getAllConsultantion);
router.post("/book-appointment", verifyToken, bookAppointment);

export default router;