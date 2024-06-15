import express from 'express';
import { signup, login, google, signOut, getAllConsultants, getConsultantById } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post('/google', google);
router.get('/logout', signOut);
router.get('/allconsultants', getAllConsultants);
router.post('/getConsultantById', getConsultantById);


export default router;