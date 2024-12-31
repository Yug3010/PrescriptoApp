import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">Welcome to the Admin Dashboard</h1>
        <p className="text-gray-600">Here’s a quick overview of the system's performance and recent activity.</p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Users */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-700">1,245</p>
        </div>
        {/* Active Users */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Active Users</h2>
          <p className="text-3xl font-bold text-green-600">876</p>
        </div>
        {/* Pending Tasks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Pending Tasks</h2>
          <p className="text-3xl font-bold text-red-500">32</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>User <strong>John Doe</strong> created a new post</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>System updated to version <strong>2.1.0</strong></span>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>New user <strong>Jane Smith</strong> registered</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/add"
            className="bg-blue-700 text-white rounded-lg py-4 px-6 text-center font-medium shadow hover:bg-blue-800 transition"
          >
            Add New Item
          </a>
          <a
            href="/list"
            className="bg-green-600 text-white rounded-lg py-4 px-6 text-center font-medium shadow hover:bg-green-700 transition"
          >
            View All Items
          </a>
          <a
            href="#"
            className="bg-yellow-500 text-white rounded-lg py-4 px-6 text-center font-medium shadow hover:bg-yellow-600 transition"
          >
            Settings
          </a>
          <a
            href="#"
            className="bg-red-500 text-white rounded-lg py-4 px-6 text-center font-medium shadow hover:bg-red-600 transition"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
