import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { token, logout } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-white text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={assets.logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact</Link>
          <Link to="/doctors" className="hover:text-gray-500">All Doctors</Link>
          <Link to="http://localhost:5174/" className="hover:text-gray-500">Admin Panel</Link>
        </div>

        {/* Authentication Section */}
        <div className="relative">
          {token ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Account
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
                  style={{ top: '100%' }}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/myappointment"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Appointments
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
