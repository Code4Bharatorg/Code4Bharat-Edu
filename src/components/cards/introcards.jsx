"use client";

import React from "react";
import { motion } from "framer-motion";

const IntroCard = () => {
  return (
    <motion.div
      className="relative bg-white border border-blue-300 rounded-lg px-4 py-6 shadow-lg w-[90%] sm:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto mb-16 md:mb-24"
      animate={{ scale: [1, 1.05, 1] }} // Pulsing animation for all devices
      transition={{
        duration: 2, // Duration of the pulsing effect
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "reverse", // Reverses the animation to create a pulsing effect
        ease: "easeInOut", // Easing effect
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 md:space-x-6 justify-around items-center">
        {/* Feature Items */}
        <span className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">
          World Class Instructors
        </span>
        <div className="hidden sm:block border-l h-4 md:h-6 border-blue-300"></div>
        <span className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">
          1:1 Sessions With Mentors
        </span>
        <div className="hidden sm:block border-l h-4 md:h-6 border-blue-300"></div>
        <span className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">
          400+ Global Hiring Partners
        </span>
        <div className="hidden sm:block border-l h-4 md:h-6 border-blue-300"></div>
        <span className="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">
          55% Avg. Salary Hike
        </span>
      </div>
      {/* Triangle at the bottom, adjusted for responsiveness */}
      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[20px] sm:border-t-[30px] border-t-blue-500 border-l-[30px] sm:border-l-[40px] md:border-l-[150px] border-l-transparent border-r-[30px] sm:border-r-[40px] md:border-r-[150px] border-r-transparent"></div>
    </motion.div>
  );
};

export default IntroCard;
