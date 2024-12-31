import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-8 py-8 bg-blue-50 rounded-lg shadow-md">
      {/* Left Side (Content) */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:pr-6 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Book Your Appointment Today!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Schedule an appointment with our top doctors and get the care you need from the comfort of your home or in-person visits.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors">
          Create Account
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-3/4 md:w-full h-auto max-h-64 object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
