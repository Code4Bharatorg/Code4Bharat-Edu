"use client";
import React from 'react';

const OurMission = () => {
  return (
    <div className="max-w-full mx-6 mb-12 bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col md:flex-row items-start justify-between p-6 md:p-8">
      {/* Left Text */}
      <div className="text-gray-700 mt-4 md:mt-8 md:ml-20 md:w-2/3">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Our <br /> <span className="text-blue-500">Mission</span>
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Our mission is to empower students with <br />
          the skills, certifications, and confidence <br />
          to excel in the tech industry. We believe <br />
          that with the right training and guidance, <br />
          every student can build a successful <br />
          career in web development.
        </p>
        
        {/* Learn More Button */}
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-black transition duration-200 text-lg md:text-xl">
          Learn More
        </button>
      </div>
      
      {/* Right Image */}
      <div className="w-full md:w-1/3 h-auto flex items-center mt-6 md:mt-0 md:mr-20"> {/* Added md:mr-20 */}
        <img 
          src="/ourmission.png" 
          alt="Our Mission" 
          className="w-full h-auto object-cover rounded-[2rem]" // Increased curvature
        />
      </div>
    </div>
  );
}

export default OurMission;
