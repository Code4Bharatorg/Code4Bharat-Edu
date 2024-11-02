'use client'
import React from 'react';
import { motion } from 'framer-motion';

const IntroCard = () => {
  return (
    <motion.div
      className="relative bg-white border border-blue-300 rounded-lg px-4 py-6 shadow-lg max-w-4xl mx-auto -mt-0 mb-24"
      animate={{ scale: [1, 1.05, 1] }} // Pulsing animation
      transition={{
        duration: 2, // Duration of the pulsing effect
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: 'reverse', // Reverses the animation to create a pulsing effect
        ease: 'easeInOut', // Easing effect
      }}
    >
      <div className="flex flex-col md:flex-row justify-around items-center md:space-x-4 space-y-4 md:space-y-0">
        <span className="text-blue-600 text-lg md:text-xl font-medium text-center">World Class Instructors</span>
        <div className="hidden md:block border-l h-6 border-blue-300"></div>
        <span className="text-blue-600 text-lg md:text-xl font-medium text-center">1:1 Sessions With Mentors</span>
        <div className="hidden md:block border-l h-6 border-blue-300"></div>
        <span className="text-blue-600 text-lg md:text-xl font-medium text-center">400+ Global Hiring Partners</span>
        <div className="hidden md:block border-l h-6 border-blue-300"></div>
        <span className="text-blue-600 text-lg md:text-xl font-medium text-center">55% Avg. Salary Hike</span>
      </div>
      {/* Triangle at the bottom, adjusted for responsiveness */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-[40px] border-t-blue-500 border-l-[50px] md:border-l-[300px] border-l-transparent border-r-[50px] md:border-r-[300px] border-r-transparent"></div>
    </motion.div>
  );
};

export default IntroCard;
