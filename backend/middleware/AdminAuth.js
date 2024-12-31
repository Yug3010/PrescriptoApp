import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const adminauth=async(req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token)
        {
            return res.json({message:"Not authorized",success:false});
        }
        const tokendecode= jwt.verify(token,process.env.SECRETKEY);
        if(tokendecode!=process.env.ADMINEMAIL+process.env.ADMINPASS)
        {
            return res.json({message:"Not authorized",success:false});
        }

        next();
    }
    catch(error)
    {
        console.log(error);
    }
}

export default adminauth;