import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useEffect } from 'react';

const MyProfile = () => {
  const { userData ,token,setUserData} = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const oneditprofile =async () => {
    try{
      const res=await axios.post('http://localhost:3000/api/user/update',{name,email},{headers:{
        token:token
      }})
      if(res.data.success)
      {
        toast.success(res.data.message);
        setUserData({...userData,name,email});
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    setName(userData.name)
    setEmail(userData.email)
  },[userData])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Profile
        </h1>
        <div className="space-y-6">
          {edit ? (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => {
                    setEdit(false);  // Action to disable editing
                    oneditprofile(); // Call your profile update function
                  }}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                  onClick={() => setEdit(false)
                  }
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Name:</span> {userData.name}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Email:</span> {userData.email}
              </p>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
