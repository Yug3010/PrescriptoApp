import express from 'express';
import { adminlogin, bookingappointment, cancelappointment, getmyappointment, getuserdetails, login, register, updateuserprofile } from '../controllers/UserController.js';
import authuser from '../middleware/UserAuth.js';
const userRouter=express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/update',authuser,updateuserprofile);
userRouter.get('/getuser',authuser,getuserdetails);
userRouter.post('/book-appointment',authuser,bookingappointment);
userRouter.get('/getappointment',authuser,getmyappointment);
userRouter.post('/deleteappointment',authuser,cancelappointment);
userRouter.post("/admin",adminlogin);

export default userRouter;