import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo or Branding */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Prescripto</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Copyright Info */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
