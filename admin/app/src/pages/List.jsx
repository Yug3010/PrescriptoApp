import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/doctor/list');
        setData(res.data.doctor); // Assuming the API returns an object with a "doctor" array
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Doctor List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-700">{doctor.name}</h2>
              <p className="text-gray-600">
                <strong>Speciality:</strong> {doctor.speciality}
              </p>
              <p className="text-gray-600">
                <strong>Degree:</strong> {doctor.degree}
              </p>
              <p className="text-gray-600">
                <strong>Experience:</strong> {doctor.experience}
              </p>
              <p className="text-gray-600">
                <strong>Fees:</strong> ${doctor.fees}
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> {doctor.address}
              </p>
              <p className="text-gray-600">
                <strong>About:</strong> {doctor.about}
              </p>
              <p
                className={`mt-2 font-bold ${
                  doctor.available ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {doctor.available ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
