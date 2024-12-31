import React, { useContext, useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';

const Add = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [degree, setDegree] = useState('');
    const [experience, setExperience] = useState('');
    const [about, setAbout] = useState('');
    const [available, setAvailable] = useState(false);
    const [fees, setFees] = useState('');
    const [address, setAddress] = useState('');
    const {token}=useContext(AdminContext);

    const submithandler=async(e)=>{
        e.preventDefault();
        console.log(name);
        try{
            const formData=new FormData();
            formData.append('image',image);
            formData.append('name',name);
            formData.append('email',email);
            formData.append('password',password);
            formData.append('speciality',speciality);
            formData.append('degree',degree);
            formData.append('experience',experience);
            formData.append('about',about);
            formData.append('avilable',available);
            formData.append('fees',fees);
            formData.append('address',address);
            const res=await axios.post('http://localhost:3000/api/doctor/add',formData,{headers:{token:token}});
            if(res.data.success)
            {
                toast.success(res.data.message);
                setImage(null);
                setName('');
                setEmail('');
                setPassword('');
                setSpeciality('');
                setDegree('');
                setExperience('');
                setAddress('');
                setAbout('');
                setAvailable('');
                setFees('');
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-blue-700 mb-6">Add Doctor</h1>
            <form
                className="bg-white p-6 rounded-lg shadow-md space-y-4"
                onSubmit={submithandler}
            >
                {/* Image Upload */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
                    {image && (
                        <div className="mb-4">
                            <img
                                src={image ? URL.createObjectURL(image) : assets.upload_area}
                                alt="Preview"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                    )}
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full px-4 py-2 border rounded-md"
                        accept="image/*"
                        required
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Speciality */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Speciality</label>
                    <select
                        name="speciality"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    >
                        <option value="" disabled>Select Speciality</option>
                        <option value="General Physician">General Physician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Gastroenterologist">Gastroenterologist</option>
                    </select>
                </div>

                {/* Degree */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Experience</label>
                    <input
                        type="text"
                        name="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* About */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">About</label>
                    <textarea
                        name="about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        rows="3"
                        required
                    ></textarea>
                </div>

                {/* Available */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="available"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                        className="mr-2"
                    />
                    <label className="text-gray-700 font-medium">Available</label>
                </div>

                {/* Fees */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Fees</label>
                    <input
                        type="number"
                        name="fees"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Date</label>
                    <input
                        type="date"
                        name="date"
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium"
                    >
                        Add Doctor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
