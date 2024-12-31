import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import doctorModel from '../models/DoctorModel.js';
import appointmentModel from '../models/AppointmentModel.js';

dotenv.config();

//token 

const tokenfn=(id)=>{
    return jwt.sign({id:id},process.env.SECRETKEY);
}

//register user

const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const userexists=await userModel.findOne({email:email});
        if(userexists)
        {
            return res.josn({message:"User already registered",success:false});
        }
        const salt= await bcrypt.genSalt(10);
        const hashpass= await bcrypt.hash(password,salt);
        const userdata={
            name,
            email,
            password:hashpass
        }
       const token = tokenfn(req._id);
       const newuser=new userModel(userdata);
       await newuser.save();
       return res.json({message:"User registered successfully",token,success:true})
    }
    catch(error)
    {
        console.log(error);
    }
}

//login user

const login =async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userexists=await userModel.findOne({email:email});
        if(!userexists)
        {
            return res.json({message:"User not registered",success:false});
        }
        const passcompare=await bcrypt.compare(password,userexists.password);
        if(!passcompare)
        {
            return res.json({message:"Invalid credentials",success:false});
        }
        const token=tokenfn(userexists._id);
        return res.json({message:"User loggedIn successfully",token,success:true});
    }
    catch(error)
    {
        console.log(error);
    }
}

//get user details

const getuserdetails = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.json({ message: "User ID not provided", success: false });
        }

        const userData = await userModel.findById(userId).select('-password'); // Exclude the password field
        if (!userData) {
            return res.json({ message: "User not found", success: false });
        }

        return res.json({
            message: "User details fetched successfully",
            userData,
            success: true,
        });
    } catch (error) {
        console.error("Error while fetching user details:", error);
        return res.json({ message: "Error while fetching user details", success: false });
    }
};


//update user details

const updateuserprofile=async(req,res)=>{
    try{
       const {userId,name,email,password}=req.body;
        const user=await userModel.findById(userId);
        if(!user)
        {
            return res.josn({message:"User not found",success:false});
        }
        if(name)
        {
            user.name=name;
        }
        if(email)
        {
            user.email=email;
        }
        if(password)
        {
            const salt=await bcrypt.genSalt(10);
            user.password=await bcrypt.hash(password,salt);
        }

        await user.save();

        return res.json({message:"Profile updated successfully",success:true})

    }
    catch(error)
    {
        console.log(error);
        return res.json({ message: "Error while updating user details", success: false });
    }
}

//booking appointment

const bookingappointment=async(req,res)=>{
    try{
        const {userId,docId,slotDay,slotTime}=req.body;

        const docData=await doctorModel.findById(docId).select('-password');

        // if(!docData.available)
        // {
        //     return res.json({success:false,message:"Doctor not available"});
        // }

        let slots_booked=docData.slots_booked;

        if(slots_booked[slotDay])
        {
            if(slots_booked[slotDay].includes(slotTime))
            {   
                return res.json({success:false,message:"Slot not available"});
            }
            else{
                slots_booked[slotDay].push(slotTime);
            }
        }
        else
        {
            slots_booked[slotDay]=[];
            slots_booked[slotDay].push(slotTime);
        }

        const userData=await userModel.findById(userId).select('-password');

        delete docData.slots_booked;

        const appointmentData={
            userId,
            docId,
            userData,
            docData,
            amount:docData.fees,
            slotTime,
            slotDay,
            date:Date.now()
        }

        const newappointment=new appointmentModel(appointmentData);

        await newappointment.save();

        await doctorModel.findByIdAndUpdate(docId,{slots_booked});

        return res.json({message:"Appointment Booked",success:true});

    }
    catch(error)
    {
        console.log(error);
        return res.json({ message: "Error while booking appointment", success: false });
    }
}

//get my appointments

const getmyappointment=async(req,res)=>{
    try{
        const getappointment=await appointmentModel.find({});
        return res.json({message:"Data fetch successfully",data:getappointment,success:true});
    }
    catch(error)
    {
        console.log(error);
        return res.json({ message: "Error while getting appointments", success: false });
    }
}

//cancel appointment

const cancelappointment=async(req,res)=>{
    try{
        const {appointmentId,userId}=req.body;
       const appointmetData=await appointmentModel.findById(appointmentId);

       if(appointmetData.userId !=userId)
       {
            return res.json({message:"User not authorized to cancel the appointment",success:false});
       }

      await appointmentModel.findByIdAndDelete(appointmentId);

      //remove slot from doctor's booked slot
      const docData=await doctorModel.findById(appointmetData.docId);

      let slots_booked=docData.slots_booked;

      slots_booked[appointmetData.slotDay]=slots_booked[appointmetData.slotDay].filter(e=>e!==appointmetData.slotTime);

      await doctorModel.findByIdAndUpdate(appointmetData.docId,{slots_booked});

      return res.json({message:"Appointment Cancelled",success:true});

    }
    catch(error)
    {
        console.log(error);
        return res.json({message:"Error while deleting appointments",success:false});
    }
}

//admin login

const adminlogin = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMINEMAIL && password === process.env.ADMINPASS) {
            const token =  jwt.sign(email + password, process.env.SECRETKEY);
            return res.json({ message: "Admin loggedin successfuly", token, success: true });
        }
        else
        {
            return res.json({ message: "Invalid admin credentials", success: false });
        }
    }

    catch (error) {
        console.log(error);
        return res.json({ message: "Error", success: false });
    }
}

export { adminlogin,register ,login,getuserdetails,updateuserprofile,bookingappointment,getmyappointment,cancelappointment};