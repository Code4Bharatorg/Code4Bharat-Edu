'use client';
import React from 'react';

const OurCourses = () => {
  return (
    <div className="max-w-full mx-8 mb-12 bg-blue-200 rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col p-6 md:p-8">
      {/* Header Section */}
      <div className="text-gray-700 mt-4 md:mt-8 md:ml-48 md:w-2/3">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Our <span className="text-blue-500">Courses</span>
        </h2>
        <p className="text-lg text-black md:text-xl mt-8 mb-6">
          Explore a range of flexible, career-focused programs that suit your timeline, goals, and interests.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] 2xl:w-[20%] text-center transition-colors duration-300 hover:bg-blue-200">
          <img
            src="/6MONTHS.png" // Replace with the correct image path for Card 1
            alt="6-Month Course"
            className="w-full h-52 object-cover rounded-tr-[2rem] rounded-bl-md" // Top right and bottom left rounded
          />
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">6-Month Course</h3>
          <p className="text-gray-600 mt-2">
            Gain core web development <br /> skills and industry-ready <br /> expertise.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] 2xl:w-[20%] text-center transition-colors duration-300 hover:bg-blue-200">
          <img
            src="/1YEAR.png" // Replace with the correct image path for Card 2
            alt="1-Year Course"
            className="w-full h-52 object-cover rounded-tr-[2rem] rounded-bl-md" // Top right and bottom left rounded
          />
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">1-Year Course</h3>
          <p className="text-gray-600 mt-2">
            Gain core web development <br /> skills and industry-ready <br /> expertise.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] 2xl:w-[20%] text-center transition-colors duration-300 hover:bg-blue-200">
          <img
            src="/2YEARS.png" // Replace with the correct image path for Card 3
            alt="2-Year Course"
            className="w-full h-52 object-cover rounded-tr-[2rem] rounded-bl-md" // Top right and bottom left rounded
          />
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">2-Year Course</h3>
          <p className="text-gray-600 mt-2">
            Deepen your web development knowledge with advanced skills and tools.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%] 2xl:w-[20%] text-center transition-colors duration-300 hover:bg-blue-200">
          <img
            src="/13.png" // Replace with the correct image path for Card 4
            alt="3-Year Course"
            className="w-full h-52 object-cover rounded-tr-[2rem] rounded-bl-md" // Top right and bottom left rounded
          />
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">3-Year Course</h3>
          <p className="text-gray-600 mt-2">
            A comprehensive program that fully prepares you for a career in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
