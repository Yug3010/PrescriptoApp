import express from 'express';
const doctorRouter=express.Router();
import { addDoctor, listdoctor } from '../controllers/DoctorController.js';
import upload from '../middleware/Multer.js';
import adminauth from '../middleware/AdminAuth.js';

doctorRouter.post('/add',upload.single('image'),adminauth,addDoctor);
doctorRouter.get('/list',listdoctor);

export default doctorRouter;