'use client';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('home'); // Default active page

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page); // Set the active page
    setIsOpen(false); // Close the menu on selection
  };

  const handleLogoClick = () => {
    // Redirect to the homepage
    window.location.href = '/'; // Update this path to your homepage URL
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button className="focus:outline-none flex-shrink-0" onClick={handleLogoClick}>
          <img src="/logoo.jpg" alt="MyLogo" className="h-24 w-48 -mt-6" />
        </button>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-0 right-0 w-3/4 max-h-3/4 bg-white shadow-lg md:shadow-none md:static md:flex md:w-auto transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          } md:flex-row md:items-center flex-col p-8 md:p-0 z-50 overflow-auto`} // Added max-height and overflow
        >
          {['home', 'about', 'services', 'contact'].map((page) => (
            <li
              key={page}
              className={`p-4 text-xl md:mx-4 hover:text-blue-600 ${
                activePage === page ? 'text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => handleMenuItemClick(page)} // Handle click to set active page
            >
              <a href={page === 'home' ? '/' : `/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <button className="hidden md:flex items-center bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 mr-24">
          Let’s Talk
          <ArrowForwardIcon fontSize="small" className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
