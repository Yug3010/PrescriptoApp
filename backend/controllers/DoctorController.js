import doctorModel from '../models/DoctorModel.js';
import Cloudinary from 'cloudinary'; 
import bcrypt from 'bcrypt';

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    } = req.body;

    const imagepath=req.file;
    const result = await Cloudinary.uploader.upload(imagepath.path, { resource_type: 'image' });
    const imageUrl = result.secure_url;

    const salt=await bcrypt.genSalt(10);
    const hashpass=await bcrypt.hash(password,salt);

    // Prepare doctor data
    const doctorData = {
      name,
      email,
      password:hashpass,
      speciality,
      degree,
      experience,
      about,
      available: available === 'true' ? true : false,
      fees: Number(fees),
      address, 
      image: imageUrl,
      date: Date.now(),
      slots_booked: {}, 
    };

    // Save to the database
    const doctor = new doctorModel(doctorData);
    await doctor.save();

    res.status(201).json({ message: 'Doctor added successfully', doctor,success:true });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const listdoctor=async(req,res)=>{
  try{
    const doctor=await doctorModel.find({});
    return res.json({message:"Data fetched successfully",doctor,success:true});
  }
  catch(error)
  {
    console.log(error);
    return res.json({message:error,success:false});
  }
}

export { addDoctor,listdoctor };
