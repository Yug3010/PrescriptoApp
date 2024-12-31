import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authuser=(req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
            return res.json({message:"User not authorized",success:false});
        }
        const tokendecode=jwt.verify(token,process.env.SECRETKEY);
        req.body.userId=tokendecode.id;
        next();
    }
    catch(error)
    {
        console.log(error);
    }
}

export default authuser;