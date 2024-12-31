import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Doctors from './pages/Doctors';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer
        position="top-right" // Change position to 'top-center', 'bottom-left', etc., if needed
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false} // Show the progress bar
        newestOnTop={true} // Newest toast appears at the top
        closeOnClick // Close on click
        pauseOnFocusLoss // Pause timer on window blur
        draggable // Draggable toast messages
        pauseOnHover // Pause timer on hover
        theme="colored" // Change to 'light', 'dark', or 'colored'
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/' element={<MyProfile />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:specialist' element={<Doctors />} />
        <Route path='/myappointment' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
