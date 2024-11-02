"use client";
import React from 'react';

const OurMission = () => {
  return (
    <div className="max-w-[calc(100%-6rem)] ml-12 mr-12 mb-12 h-[500px] bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex items-start justify-between p-8">
      {/* Left Text */}
      <div className="text-gray-700 ml-20 mt-8 text-4xl font-semibold">
        <p>Our <br /> <span className="text-blue-500">Mission</span></p>
        <p className="text-lg mt-4">Our mission is to empower students with <br />the skills, certifications, and confidence <br />to excel in the tech industry. We believe <br /> that with the right training and guidance, <br /> every student can build a successful <br /> career in web development.</p>
        
        {/* Learn More Button */}
        <button className="mt-6 px-2 py-1 bg-blue-500 text-white font-semibold rounded-lg hover:bg-black transition duration-200 text-lg">
          Learn More
        </button>
      </div>
      
      {/* Right Image */}
      <div className="w-1/3 h-full flex items-center">
        <img 
          src="/ourmission.png" 
          alt="Our Mission" 
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default OurMission;
