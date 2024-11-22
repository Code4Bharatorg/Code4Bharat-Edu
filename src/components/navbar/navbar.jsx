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
    <nav className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 px-3 md:px-6 md:py-1">
        {/* Logo */}
        <button
          className="focus:outline-none flex-shrink-0"
          onClick={handleLogoClick}
        >
          <div className="relative w-48 h-16 md:w-96 md:h-28">
           
            {/* Increased size on mobile */}
            <Image
              src="/18.jpg"
              alt="Logo"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </button>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon fontSize="large" className="text-gray-800 z-50" />
          ) : (
            <MenuIcon fontSize="large" className="text-gray-800 z-50" />
          )}
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg md:shadow-none md:static md:flex md:w-auto transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } md:flex-row md:items-center flex-col p-8 md:p-0 z-40`}
        >
          {[
            "eduportal",
            "our-story",
            "learn&grow",
            "support-center",
            "verify-certificate",
          ].map((page) => (
            <li
              key={page}
              className={`text-lg font-semibold md:text-[1.2vw] md:mx-4 hover:text-blue-600 ${
                activePage === page ? "text-blue-600" : "text-gray-500"
              } my-4 md:my-0`}
              onClick={() => handleMenuItemClick(page)}
            >
              <a href={page === "eduportal" ? "/" : `/${page}`}>
                {page
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="hidden md:flex items-center bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 mx-4"
        >
          Let&apos;s Talk
          <ArrowForwardIcon fontSize="small" className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
