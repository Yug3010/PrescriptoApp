import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectdb=async()=>{
    await mongoose.connect(process.env.MONGODBURL).then(()=>{
        console.log("Database Connected");
    }).catch(()=>{
        console.log("Error while connecting database");
    })
}

export default connectdb;