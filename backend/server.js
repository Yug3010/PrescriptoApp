import express from 'express';
import cors from 'cors';
import connectdb from './config/Db.js';
import connectcloudinary from './config/Cloudinary.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';
const app=express();
const port=3000;

//DB and Cloudinary Connection
connectdb();
connectcloudinary();

//middlewares
app.use(cors());
app.use(express.json());

//API Endpoints
app.use('/api/user',userRouter);
app.use('/api/doctor',doctorRouter);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})