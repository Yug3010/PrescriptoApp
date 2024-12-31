import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { specialityData } from '../assets/assets';

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [category, setCategory] = useState('All');

  const filteredData=doctors.filter((item)=>{
    const matchcategory=category!='All'?category.includes(item.speciality):true;
    return matchcategory;
  })

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left Section: Specialties */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Specialties</h2>
        <ul className="space-y-3">
          {/* All Button */}
          <li
            className={`py-2 px-4 ${
              category === 'All' ? 'bg-blue-700' : 'bg-blue-500'
            } text-white rounded-md text-center font-medium hover:bg-blue-600 transition`}
            onClick={() => setCategory('All')}
          >
            All
          </li>
          {/* Specialties */}
          {specialityData.map((specialty, index) => (
            <li
              key={index}
              className={`py-2 px-4 ${
                category === specialty.speciality ? 'bg-blue-700' : 'bg-blue-500'
              } text-white rounded-md text-center font-medium hover:bg-blue-600 transition`}
              onClick={() => setCategory(specialty.speciality)}
            >
              {specialty.speciality}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Doctors */}
      <div
        className={`w-full md:w-3/4 grid ${
          filteredData.length === 1
            ? 'grid-cols-1'
            : filteredData.length === 2
            ? 'grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        } gap-4`}
      >
        {/* Display Filtered Cards */}
        {filteredData.map((doctor) => (
          
          <div
            key={doctor._id}
            className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 flex flex-col"
            style={{ height: '240px' }} // Set fixed height for the card
          >
            {/* Image Section */}
            <Link to={`/appointment/${doctor._id}`}>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-36 object-contain"
            />
            </Link>

            {/* Content Section */}
            <div className="p-2 flex flex-col justify-between flex-grow">
              <h3 className="text-md font-semibold text-gray-800 truncate">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Specialty:</strong> {doctor.speciality}
              </p>
            </div>
          </div>
        ))}
        
        

        {/* Handle Empty Filter */}
        {filteredData.length === 0 && (
          <p className="col-span-full text-center text-gray-500 font-medium">
            No doctors available for the selected specialty.
          </p>
        )}
      </div>
      
    </div>
  );
};

export default Doctors;
