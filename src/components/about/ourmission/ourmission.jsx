// src/components/OurMission.jsx

"use client";
import React from 'react';

const OurMissionAbout = () => {
  return (
    <div className="max-w-[calc(100%-2rem)] mx-auto mb-12 mt-12 bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[3rem] rounded-bl-[3rem] flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-10 lg:p-14">
      {/* Left Text */}
      <div className="mb-8 md:mb-0 text-gray-700 text-center md:text-left text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold flex-1 px-2 sm:px-4 md:px-0">
        <p>
          Our <span className="text-blue-500">Mission</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 md:mt-6 lg:mt-12 leading-relaxed">
          At Education.Code4Bharat, our mission is clear: to empower students
          with practical, industry-relevant skills and guide them toward successful
          careers in web development. We strive to make a meaningful impact by
          offering a comprehensive curriculum, personalized mentorship, and
          100% placement assistance. We believe that every student has the
          potential to thrive in the tech world, and we’re committed to providing
          the resources, training, and support to make it possible.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <img
          src="/ourmission.png" // Replace with your image path or URL
          alt="Our Mission"
          className="mx-auto w-40 sm:w-48 md:w-80 lg:w-[28rem] h-auto rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default OurMissionAbout;
