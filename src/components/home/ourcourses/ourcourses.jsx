"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const OurCourses = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleSyllabus = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const courses = [
    {
      title: "Bootcamp - 2 Days",
      description:
        "An intensive program designed to immerse you in web development, covering all essential skills and technologies. This bootcamp includes hands-on projects, mentorship, and job placement support to ensure you are job-ready.",
      imageSrc: "/courses/bootcamp.jpg",
      altText: "Bootcamp Course",
      syllabus: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "Web Development Capstone Project",
      ],
    },
    {
      title: "MERN Stack 45 Days",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and comprehensive placement assistance to help you secure your first job.",
      imageSrc: "/courses/1.jpg",
      altText: "45 days MERN Stack Course",
      syllabus: [
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "Web Development Capstone Project",
      ],
    },
    {
      title: "MERN Stack - 4 Months",
      description:
        "A comprehensive program that builds on foundational skills and covers intermediate-level web development concepts, ensuring you’re fully prepared to meet industry demands. This course combines extensive hands-on training with complete placement assistance and guaranteed placement for long-term career success.",
      imageSrc: "/courses/2nd.jpg",
      altText: "4 months MERN Stack Course",
      syllabus: [
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "Web Development Capstone Project",
      ],
    },
  ];

  return (
    <div className="max-w-full mx-4 md:mx-8 mb-12 bg-[#116EB3] rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col p-4 md:p-8">
      {/* Header Section */}
      <div className="text-gray-700 mt-4 md:mt-8 md:ml-48 md:w-2/3 xl:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold">
          Our <span className="text-white">Courses</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mt-6 mb-6">
          Explore a range of flexible, career-focused programs that suit your
          timeline, goals, and interests.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            layout
            className="w-full sm:w-[85%] md:w-[45%] lg:w-[30%] bg-[#FFFFFF] rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg p-4 flex flex-col justify-between"
            animate={{
              height: expandedCardIndex === index ? "auto" : "500px",
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Image Section */}
            <div className="w-full h-[150px] sm:h-[200px] flex items-center justify-center">
              <div className="w-[90%] sm:w-[80%] h-full rounded-tr-[2.5rem] rounded-bl-[2.5rem] overflow-hidden">
                <Image
                  src={course.imageSrc}
                  alt={course.altText}
                  width={300} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="w-full flex flex-col gap-3 text-center mt-4">
              <h1 className="text-lg sm:text-xl md:text-[1.4rem] font-medium text-[#2563EB]">
                {course.title}
              </h1>
              <p className="text-sm sm:text-base md:text-[.8rem] font-medium leading-none text-gray-700">
                {course.description}
              </p>
            </div>

            {/* Button Section */}
            <div className="w-full flex items-center justify-center mt-4">
              <button
                onClick={() => toggleSyllabus(index)}
                className="px-6 py-2 text-sm sm:text-base md:text-[1rem] text-white font-medium bg-[#2563EB] rounded-xl hover:bg-[#1e50ab] transition-colors"
              >
                {expandedCardIndex === index
                  ? "Hide Syllabus"
                  : "View Syllabus"}
              </button>
            </div>

            {/* Syllabus Section */}
            <AnimatePresence>
              {expandedCardIndex === index && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-base sm:text-lg md:text-[1.2rem] font-semibold text-[#2563EB] mt-4">
                    Syllabus
                  </h2>
                  <ul className="list-disc text-sm sm:text-base md:text-[1rem] text-gray-700 mt-2 ml-6">
                    {course.syllabus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
