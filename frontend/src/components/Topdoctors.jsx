import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Topdoctors = () => {

    const {doctors}=useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Top Doctors to Book
      </h1>
      <p className="text-center text-sm md:text-base text-gray-600 mb-8">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-5 gap-6">
          {doctors.slice(0, 5).map((item, index) => (
            <Link to={`/appointment/${item._id}`}>
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              {/* Doctor Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              {/* Doctor Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>

              {/* Doctor Speciality */}
              <p className="text-sm text-blue-600 font-bold">{item.speciality}</p>
            </div>
            </Link>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-5 gap-6">
          {doctors.slice(5, 10).map((item, index) => (
            <Link to={`/appointment/${item._id}`}>
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              {/* Doctor Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              {/* Doctor Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>

              {/* Doctor Speciality */}
              <p className="text-sm text-blue-600 font-bold">{item.speciality}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-12">
        <Link to='/doctors'>
        <button
          className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Topdoctors;
