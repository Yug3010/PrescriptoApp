import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Add from './pages/Add';
import List from './pages/List';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';

const App = () => {
  const {token}=useContext(AdminContext);

  return (
    <div className="flex flex-col min-h-screen">
      
      {!token ? (
        // If token doesn't exist, render the Login page
        <>
        <ToastContainer/>
        <Login />
        </>
      ) : (
        // If token exists, render the main application layout
        <>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <Sidebar />

            {/* Page Content */}
            <div className="flex-1 p-6 bg-gray-50">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
