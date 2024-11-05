"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const OurMissionAbout = () => {
  return (
    <div className="max-w-[calc(100%-2rem)] mx-auto mb-12 mt-12 bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[3rem] rounded-bl-[3rem] flex flex-col md:flex-row items-center justify-between p-6 md:p-8 lg:p-10">
      {/* Left Text */}
      <div className="mb-8 md:mb-0 text-black text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold flex-1 px-2 sm:px-4 md:px-0">
        <p>
          Our <span className="text-blue-600">Mission</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8 leading-relaxed">
          At Education.Code4Bharat, our mission is clear: to empower students
          with practical, industry-relevant skills and guide them toward
          successful careers in web development. We strive to make a meaningful
          impact by offering a comprehensive curriculum, personalized
          mentorship, and 100% placement assistance. We believe that every
          student has the potential to thrive in the tech world, and we’re
          committed to providing the resources, training, and support to make it
          possible.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <div className="relative w-52 sm:w-60 md:w-80 lg:w-[28rem] h-auto">
          <Image
            src="/ourmission.png" // Replace with your image path
            alt="Our Mission"
            layout="responsive" // Use responsive layout
            width={448} // Set a suitable width in pixels
            height={280} // Set a suitable height in pixels
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMissionAbout;
