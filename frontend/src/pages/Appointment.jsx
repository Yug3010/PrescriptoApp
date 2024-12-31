import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const Appointment = () => {
  const [productData, setProductData] = useState(null);
  const { doctors, token } = useContext(AppContext);
  const { docId } = useParams();

  // New state variables for booking
  const [slotDay, setslotDay] = useState(null);
  const [slotTime, setslotTime] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const doctor = doctors.find((item) => item._id === docId);
      setProductData(doctor);
    };
    fetchData();
  }, [docId, doctors]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Loading doctor details...</p>
      </div>
    );
  }

  const { name, image, speciality, degree, experience, about, fees, address } =
    productData;

  const handleBooking = async () => {
    try {
      console.log(slotDay,slotTime);
      const res=await axios.post('http://localhost:3000/api/user/book-appointment',{docId,slotDay,slotTime},{headers:{
        token:token
      }})
      if(res.data.success)
      {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 flex flex-col gap-12">
      {/* Doctor's Details */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Doctor's Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Doctor's Information */}
        <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{name}</h2>

          <p className="text-gray-600 mb-2">
            <strong>Specialty:</strong> {speciality}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Degree:</strong> {degree}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Experience:</strong> {experience}
          </p>

          <p className="text-gray-600 mb-4">
            <strong>About:</strong> {about}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Fees:</strong> ${fees}
          </p>

          <p className="text-gray-600">
            <strong>Address:</strong>
            <br />
            {address.line1}
            <br />
            {address.line2}
          </p>
        </div>
      </div>

      {/* Booking Slots Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Select Booking Slot
        </h3>

        {/* Days */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-2">Day:</h4>
          <div className="flex gap-2 flex-wrap">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
              (day, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-lg transition ${
                    slotDay === day
                      ? 'bg-blue-700 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                  onClick={() => setslotDay(day)}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-2">Time:</h4>
          <div className="flex gap-2 flex-wrap">
            {['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM'].map(
              (time, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-lg transition ${
                    slotTime === time
                      ? 'bg-green-700 text-white'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                  onClick={() => setslotTime(time)}
                >
                  {time}
                </button>
              )
            )}
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="text-center">
          {token ? (
            <button
              className={`py-3 px-6 text-lg font-medium rounded-lg transition ${
                slotDay && slotTime
                  ? 'bg-blue-700 text-white hover:bg-blue-800'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
              onClick={handleBooking}
              disabled={!slotDay || !slotTime}
            >
              Book Appointment
            </button>
          ) : (
            <button
              className="py-3 px-6 text-lg font-medium rounded-lg bg-gray-400 text-gray-700 cursor-not-allowed"
              disabled
            >
              Please Login to Book
            </button>
          )}
          {!token && (
            <p className="text-red-600 mt-2">
              You need to{' '}
              <Link to="/login" className="text-blue-500 underline">
                log in
              </Link>{' '}
              to book an appointment.
            </p>
          )}
        </div>

        {/* Booking Success Message */}
        {bookingSuccess && (
          <div className="mt-4 text-green-700 text-lg font-medium text-center">
            Appointment booked successfully for {slotDay} at {slotTime}!
          </div>
        )}

        {/* Booking Error Message */}
        {bookingError && (
          <div className="mt-4 text-red-700 text-lg font-medium text-center">
            {bookingError}
          </div>
        )}
      </div>

      {/* Related Doctors Section */}
      <div>
        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Related Doctors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((item) => {
            if (item.speciality === speciality && item._id !== docId) {
              return (
                <Link to={`/appointment/${item._id}`} key={item._id}>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">{item.speciality}</p>
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
