"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Set the active page based on the current URL path
    const currentPath = window.location.pathname;
    const page = currentPath === "/" ? "home" : currentPath.slice(1);
    setActivePage(page);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // Close the menu on selection
  };

  const handleLogoClick = () => {
    // Redirect to the homepage
    window.location.href = "/"; // Update this path to your homepage URL
  };

  const handleWhatsAppRedirect = () => {
    // Redirect to WhatsApp
    window.open("https://wa.me/+919594402916", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button className="focus:outline-none flex-shrink-0" onClick={handleLogoClick}>
          <div className="relative h-24 w-48 -mt-6">
            <Image
              src="/logo.png" // Ensure this image exists in your public folder
              alt="MyLogo"
              layout="fill" // Makes the image fill the container
              objectFit="contain" // Adjust objectFit as needed
            />
          </div>
        </button>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-0 right-0 w-3/4 max-h-3/4 bg-white shadow-lg md:shadow-none md:static md:flex md:w-auto transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } md:flex-row md:items-center flex-col p-8 md:p-0 z-50 overflow-auto`}
        >
          {["home", "about-us", "courses", "contact-us", "verify-certificate"].map((page) => (
            <li
              key={page}
              className={`p-4 text-xl font-semibold md:mx-4 hover:text-blue-600 ${
                activePage === page ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => handleMenuItemClick(page)}
            >
              <a href={page === "home" ? "/" : `/${page}`}>
                {page.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="hidden md:flex items-center bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 mr-24"
        >
          Let’s Talk
          <ArrowForwardIcon fontSize="small" className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
