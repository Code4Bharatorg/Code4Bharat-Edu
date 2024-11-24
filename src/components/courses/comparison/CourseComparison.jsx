"use client";

import React from "react";

export const CourseComparison = () => {
  const courses = [
    {
      title: "Bootcamp (2 Days)",
      timing: "Our 16-hour MERN Stack Bootcamp",
      certificate: "-Full Stack Certificate (MERN Stack)",
    },
    {
      title: "45-Day (Fast Track) MERN Stack Course",
      timing: "Our 180-hour MERN Stack Fast Track Development Course",
      certificate:
        "- Full Stack Certificate (MERN Stack)\n- JavaScript Developer Certificate\n- Web Development Specialist Certificate",
    },
    {
      title: "4-Month (In-Depth Program) MERN Stack Course",
      timing: "Our 480-hour MERN Stack Full Stack Development Course",
      certificate:
        "- Full Stack Certificate (MERN Stack)\n- JavaScript Developer Certificate\n- Advanced React Developer Certificate\n- Node.js and Express.js Specialist Certificate\n- MongoDB Professional Certificate\n- Git & Version Control Expert Certificate\n- Frontend Development Pro Certificate\n- Backend Development Specialist Certificate\n- Web Development Project Certificate\n- Advanced Web Development Capstone Certificate",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#06241B]">
        Your Guide to <span className="text-[#116EB3]">Courses</span> and <span className="text-[#116EB3]">Certificates</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Compare our programs and find the best one that fits your learning
          goals.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#06241B]">
              {course.title}
            </h3>
            <p className="text-black mt-4">
              <span className="font-bold">Timing:</span> {course.timing}
            </p>
            <p className="text-black mt-4">
              <span className="font-bold">Certificate:</span>
            </p>
            <ul className="list-disc list-inside text-black mt-2 whitespace-pre-wrap">
              {course.certificate.split("\n").map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseComparison;
