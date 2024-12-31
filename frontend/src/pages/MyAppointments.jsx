import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import {toast} from 'react-toastify';

const MyAppointments = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const { token } = useContext(AppContext);

  const getMyAppointments = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/user/getappointment', {
        headers: {
          token: token,
        },
      });
      if (res.data.success) {
        setMyAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      console.log(appointmentId);
      const res=await axios.post(`http://localhost:3000/api/user/deleteappointment`,{appointmentId},{headers:{
        token:token
      }
       
      })
      if(res.data.success)
      {
        toast.success(res.data.message);
        getMyAppointments();
      }
    } catch (error) {
      console.error(error);
      
    }
  };

  useEffect(() => {
    getMyAppointments();
  }, [token]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      {myAppointments.length === 0 ? (
        <p className="text-gray-600">No appointments found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAppointments.map((item, id) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center"
            >
              <img
                src={item.docData.image}
                alt={item.docData.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Dr. {item.docData.name}
              </h2>
              <p className="text-gray-600 text-sm italic">{item.docData.speciality}</p>
              <p className="text-gray-600">{item.docData.degree}</p>
              <p className="text-gray-600">{item.docData.experience}</p>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Fees:</strong> ₹{item.docData.fees}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                <strong>Address:</strong> {item.docData.address}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                <strong>Slot:</strong> {item.slotDay}, {item.slotTime}
              </p>
              <button
                onClick={() => cancelAppointment(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
