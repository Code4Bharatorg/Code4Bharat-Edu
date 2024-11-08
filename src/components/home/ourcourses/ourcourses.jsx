"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const OurCourses = () => {
  const router = useRouter();

  const handleCardClick = (coursePath) => {
    router.push(coursePath);
  };

  // Updated courses data with only 2-Month and 4-Month MERN Stack courses
  const courses = [
    {
      title: "MERN Stack",
      duration: "2-Month",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      imageSrc: "/2MONTH.png", // Ensure this image exists in the public directory
      altText: "2-Month MERN Stack Course",
      path: "/courses/2-month",
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
      title: "MERN Stack",
      duration: "4-Month",
      description:
        "A comprehensive program that builds on foundational skills and covers intermediate-level web development concepts, ensuring you’re fully prepared to meet industry demands. This course combines extensive hands-on training with complete placement assistance for long-term career success.",
      imageSrc: "/4MONTH.png", // Ensure this image exists in the public directory
      altText: "4-Month MERN Stack Course",
      path: "/courses/4-month",
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

  // State to manage which card's syllabus is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Function to toggle syllabus expansion
  const toggleSyllabus = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-full mx-4 md:mx-8 mb-12 bg-[#116EB3] rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col p-6 md:p-8">
      {/* Header Section */}
      <div className="text-gray-700 mt-4 md:mt-8 md:ml-48 md:w-2/3 xl:w-1/2">
        <h2 className="text-4xl text-black md:text-5xl font-semibold">
          Our <span className="text-white">Courses</span>
        </h2>
        <p className="text-lg text-white md:text-xl mt-8 mb-6">
          Explore a range of flexible, career-focused programs that suit your timeline, goals, and interests.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-8 mb-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-tr-[2rem] rounded-bl-[2rem] p-6 w-full sm:w-[48%] md:w-[35%] lg:w-[35%] xl:w-[28%] 2xl:w-[25%] text-center transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src={course.imageSrc}
                alt={course.altText}
                fill
                className="object-cover rounded-tr-[2rem] rounded-bl-md"
                priority
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-2xl font-semibold">
              {course.title} - {course.duration}
            </h3>
            <p className="text-gray-600 mt-2">
              {course.description}
            </p>

            {/* Read More Button */}
            <button
              onClick={() => toggleSyllabus(index)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              {expandedCard === index ? "Hide Syllabus" : "Read More"}
            </button>

            {/* Syllabus Section */}
            <AnimatePresence>
              {expandedCard === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 overflow-hidden"
                >
                  <h4 className="text-xl text-blue-500 mb-2">Syllabus:</h4>
                  <ul className="text-gray-700 list-disc list-inside text-left">
                    {course.syllabus.map((skill, idx) => (
                      <li key={idx} className="mb-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
