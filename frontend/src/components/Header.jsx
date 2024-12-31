import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="relative h-96 md:h-[600px]">
      {/* Background Image */}
      <img
        src={assets.header_img}
        alt="Header"
        className="w-full h-full object-contain mt-6"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white px-4 md:px-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to Our Clinic
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Your health is our priority. Schedule an appointment with us today for personalized care.
          </p>
          <a href='#speciality'>
            <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
