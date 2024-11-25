"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link for navigation

const OurMission = () => {
  const handleLearnMoreClick = () => {
    // WhatsApp link with a predefined message
    const whatsappNumber = "9594430295"; // Replace with your WhatsApp number
    const message = "Hello, I am interested in learning more about your mission and courses!";
    const encodedMessage = encodeURIComponent(message); // Encode the message to handle spaces and special characters
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp chat with the message ready to be sent
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-full mx-4 sm:mx-6 mb-8 sm:mb-12 bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[2rem] sm:rounded-tr-[4rem] rounded-bl-[2rem] sm:rounded-bl-[4rem] flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:p-8">
      {/* Left Text */}
      <div className="text-gray-700 mt-4 md:mt-0 md:ml-10 md:w-2/3">
        <h2 className="text-3xl text-black sm:text-4xl md:text-5xl font-semibold leading-tight">
          Our <br /> <span className="text-blue-600">Mission</span>
        </h2>
        <p className="text-base text-black sm:text-lg md:text-xl mt-3 sm:mt-4 leading-relaxed">
          Our mission is to empower students with <br />
          the skills, certifications, and confidence <br />
          to excel in the tech industry. We believe <br />
          that with the right training and guidance, <br />
          every student can build a successful <br />
          career in web development.
        </p>

        {/* Learn More Button */}
        <button
          onClick={handleLearnMoreClick}
          className="mt-4 sm:mt-6 px-3 sm:px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-black transition duration-200 text-base sm:text-lg md:text-xl"
        >
          Learn More
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3 h-auto flex items-center mt-4 md:mt-0 md:mr-10">
        <div className="relative w-full h-60 sm:h-72 md:h-[24rem]"> {/* Adjusted height for better responsiveness */}
          <Image
            src="/misson.jpg" // Replace with your actual image path
            alt="Our Mission"
            layout="fill" // Makes the image fill the container
            objectFit="cover" // Ensures the image covers the container without distortion
            className="rounded-[1.5rem] sm:rounded-[2rem]" // Adjusted rounded corners for smaller screens
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
