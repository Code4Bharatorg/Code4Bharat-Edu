"use client";
import React, { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const PopularCourse = () => {
  // Updated data for the Bootcamp, 45 Days, and 4-Month courses
  const courses = [
    {
      title: "Bootcamp",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      mainImage: "/2months.webp", // Same image as 45 Days Course
      miniImages: ["/harsh.jpg", "/dp4.jpg", "/dp3.jpg", "/dp5.jpg"], // Same images as 45 Days Course
      rightText: "+100 Students",
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
      title: "45 Days Course",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      mainImage: "/2months.webp", // Same image
      miniImages: ["/harsh.jpg", "/dp4.jpg", "/dp3.jpg", "/dp5.jpg"], // Same images
      rightText: "+40 Students",
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
      title: "4-Month Course",
      description:
        "A comprehensive program that builds on foundational skills and covers intermediate-level web development concepts, ensuring you’re fully prepared to meet industry demands. This course combines extensive hands-on training with complete placement assistance for long-term career success.",
      mainImage: "/4months.webp",
      miniImages: ["/dp1.jpg", "/dp2.jpg", "/dp3.jpg", "/dp4.jpg"],
      rightText: "+234 Students",
      syllabus: [
        "Advanced SQL",
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React Advanced",
        "Redux Thunk/Saga",
        "Node Advanced",
        "Express Middleware",
        "MongoDB Aggregations",
        "Git and GitHub",
        "Full-stack Development Capstone Project",
      ],
    },
  ];

  // Updated filter options
  const courseFilters = ["All Programme", "Bootcamp", "45 Days Course", "4-Month Course"];

  const [selectedFilter, setSelectedFilter] = useState("All Programme");

  // State to manage which card's syllabus is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Function to handle filtering
  const filteredCourses =
    selectedFilter === "All Programme"
      ? courses
      : courses.filter((course) => course.title === selectedFilter);

  // Pagination logic for mobile view
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const coursesPerPage = 1; // Show one course at a time on mobile
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Calculate the courses to display for the current page
  const startIndex = currentPage * coursesPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  // Handlers for next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to toggle syllabus expansion
  const toggleSyllabus = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full mt-14">
      {/* Section Title */}
      <div className="w-full flex items-center justify-center relative">
        <h1 className="text-[5vw] md:text-[2.5vw] font-bold text-[#116EB3]">
          Popular Courses
        </h1>
        <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 md:gap-5 w-[90%] md:w-[60%] mx-auto justify-center mt-8 flex-wrap">
        {courseFilters.map((filter) => (
          <button
            key={filter}
            aria-label={`Filter by ${filter}`}
            className={`px-2 md:px-4 text-[3vw] md:text-[1.2vw] py-1 md:py-2 rounded-md font-medium ${
              selectedFilter === filter
                ? "bg-[#116EB3] text-white"
                : "border-[#818C96] border-[1.5px] text-[#818C96]"
            }`}
            onClick={() => {
              setSelectedFilter(filter);
              setCurrentPage(0); // Reset to first page when filter changes
              setExpandedCard(null); // Collapse any expanded syllabus
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Courses and Navigation */}
      <div className="flex flex-col items-center mt-8">
        {/* Courses */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Desktop View - Show all courses */}
          <div className="hidden md:flex items-center gap-8 justify-center px-10">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                index={index}
                title={course.title}
                description={course.description}
                mainImage={course.mainImage}
                miniImages={course.miniImages}
                rightText={course.rightText}
                syllabus={course.syllabus}
                isExpanded={expandedCard === index}
                toggleSyllabus={toggleSyllabus}
                className="h-[400px] w-[300px]" // Ensure equal height and width
              />
            ))}
          </div>

          {/* Mobile View - Show one course at a time with pagination */}
          <div className="flex md:hidden items-center justify-center">
            {currentCourses.map((course, index) => (
              <CourseCard
                key={startIndex + index}
                index={startIndex + index}
                title={course.title}
                description={course.description}
                mainImage={course.mainImage}
                miniImages={course.miniImages}
                rightText={course.rightText}
                syllabus={course.syllabus}
                isExpanded={expandedCard === startIndex + index}
                toggleSyllabus={toggleSyllabus}
                className="h-[400px] w-[300px]" // Ensure equal height and width
              />
            ))}
          </div>
        </div>

        {/* Previous and Next Buttons - Visible on mobile only */}
        <div className="flex md:hidden items-center justify-center mt-4 space-x-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`bg-white shadow-lg p-2 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
            aria-label="Previous Course"
          >
            <ArrowBack />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className={`bg-white shadow-lg p-2 rounded-full transition-all duration-300 ${
              currentPage >= totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
            aria-label="Next Course"
          >
            <ArrowForward />
          </button>
        </div>

        {/* Navigation Dots - Visible on mobile only */}
        <div className="flex md:hidden justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? "bg-[#116EB3]" : "bg-gray-300"
              } transition-all duration-300`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
