import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-white text-black shadow-md">
      {/* Sidebar Header */}
      <div className="p-6 text-2xl font-bold border-b border-gray-300">
        My Dashboard
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul>
          <li className="px-6 py-3 hover:bg-gray-100">
            <Link to="/" className="flex items-center space-x-2">
              <img src={assets.home_icon} alt="Home Icon" className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-100">
            <Link to="/add" className="flex items-center space-x-2">
              <img src={assets.add_icon} alt="Add Icon" className="h-5 w-5" />
              <span>Add</span>
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-100">
            <Link to="/list" className="flex items-center space-x-2">
              <img src={assets.list_icon} alt="List Icon" className="h-5 w-5" />
              <span>List</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
