import React from 'react';
import { assets } from '../assets/assets'; // Adjust the path to match your file structure
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';

const Navbar = () => {
  const {logout}=useContext(AdminContext);
  return (
    <nav className="bg-white text-gray-800 px-6 py-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={assets.admin_logo} alt="Admin Logo" className="h-10 w-auto" />
      </div>

      {/* Logout Button */}
      <div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium shadow transition"
          onClick={()=>logout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
