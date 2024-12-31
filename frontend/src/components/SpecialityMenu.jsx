import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className="container mx-auto px-4 py-8 " id="speciality">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Specialities
      </h2>
      <div className="flex justify-center overflow-x-auto">
        <div className="flex space-x-4">
          {specialityData.map((item, index) => (
            <Link to={`/doctors/${item.speciality}`} key={index}>
              <div
                className="cursor-pointer flex-shrink-0 bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center w-36"
              >
                <img
                  src={item.image}
                  alt={item.speciality}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-sm font-semibold">{item.speciality}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
