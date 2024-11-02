// src/components/OurMission.jsx

"use client";
import React from 'react';
// If you're importing an image from your project, uncomment the next line and adjust the path
// import missionImage from '../assets/missionImage.jpg';

const OurMissionAbout = () => {
  return (
    <div className="max-w-[calc(100%-4rem)] mx-auto mb-12 mt-12 mr-0 ml-8 h-auto bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[3rem] rounded-bl-[3rem] flex flex-col md:flex-row items-center justify-between p-10 md:p-14">
      {/* Left Text */}
      <div className="text-gray-700 text-center md:text-left text-3xl md:text-5xl font-bold flex-1">
        <p>
          Our <span className="text-blue-500">Mission</span>
        </p>
        <p className="text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          At Education.Code4Bharat, our mission is clear: to empower students<br/>
          with practical, industry-relevant skills and guide them toward successful<br/>
          careers in web development. We strive to make a meaningful impact by <br/>
          offering a comprehensive curriculum, personalized mentorship, and <br/>
          100% placement assistance. We believe that every student has the <br/>
          potential to thrive in the tech world, and we’re committed to providing<br/>
          the resources, training, and support to make it possible.
        </p>
      </div>
      
      {/* Right Image */}
      <div className="flex-1 mt-6 md:mt-0 md:ml-6 flex justify-center">
        <img
          src="/ourmission.png" // Replace with your image path or URL
          alt="Our Mission"
          className="w-48 md:w-64 h-auto rounded shadow-lg"
        />
        {/* If you're importing an image, use the following instead:
        <img
          src={missionImage}
          alt="Our Mission"
          className="w-48 md:w-64 h-auto rounded shadow-lg"
        /> */}
      </div>
    </div>
  );
};

export default OurMissionAbout;
