import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import Topdoctors from '../components/Topdoctors';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className="mt-28"> {/* Adds margin to push the content below the Navbar */}
      <Header />
      <SpecialityMenu />
      <Topdoctors />
      <Banner />
    </div>
  );
};

export default Home;
