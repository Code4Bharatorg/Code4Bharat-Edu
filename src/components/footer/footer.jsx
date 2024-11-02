import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="bg-blue-200 text-white py-8"> {/* Adjusted padding for better spacing */}
      <div className="container mx-auto px-4"> {/* Container for centered content with horizontal padding */}
        <div className="flex flex-col md:flex-row justify-start items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column: Contact Us */}
          <div className="flex-1">
            <img src="/logoo.jpg" alt="Logo" className="mb-4 h-24 w-56 md:mx-0" /> {/* Logo */}
            <h3 className="font-semibold text-left text-black mb-2">Contact Us</h3>
            <p className="font-semibold text-left text-gray-500 mb-2">Call: +91 959 440 2916</p>
            <p className="font-semibold text-left text-black mb-2">Email: code4bharat@gmail.com</p>
            <p className="font-semibold text-left text-gray-500 mb-4">
              Office No. 1A & 2, Lower Ground Floor, Building No. 3 White House, New Buddha Colony, Kurla (west)
            </p>
            <div className="flex justify-start space-x-4"> {/* Align icons to the left */}
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/yourpage" // Replace with your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-700 hover:text-white transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/yourprofile" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white text-pink-500 rounded-full p-2 hover:bg-pink-500 hover:text-white transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Second Column: Explore */}
          <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Explore</h3>
            <ul className="text-left space-y-2">
              <li>
                <a href="/" className="text-gray-500 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-500 hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Category */}
          <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Category</h3>
            <ul className="text-left space-y-2">
              <li>
                <a href="/" className="text-gray-500 hover:underline">
                  Pay After Placement
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:underline">
                  Student Experience and Support
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-500 hover:underline">
                  Career Pathways
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 hover:underline">
                  Join Education.Code4Bharat
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Get In Touch */}
          <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Get In Touch</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Email Here"
                className="p-2 rounded-md text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center"> {/* Align copyright text to the left */}
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Code4Bharat. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
