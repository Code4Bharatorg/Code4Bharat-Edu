"use client";
import React, { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const PopularCourse = () => {
  // Sample data for multiple courses with updated image URLs
  const courses = [
    {
      title: "6-Month Course",
      description:
        "Gain core web development skills and industry-ready expertise. Completion certificate recognized by industry leaders.",
      mainImage: "/courses/hero.png",
      miniImages: [
        "/courses/hero1.png",
        "/courses/hero2.png",
        "/courses/hero3.png",
        "/courses/hero4.png",
      ],
      rightText: "+40 Students",
    },
    {
      title: "1-Year Course",
      description:
        "Build a solid foundation in web development, preparing you for specialized roles.",
      mainImage: "/courses/hero.png",
      miniImages: [
        "/courses/hero1.png",
        "/courses/hero2.png",
        "/courses/hero3.png",
        "/courses/hero4.png",
      ],
      rightText: "+11 Students",
    },
    {
      title: "2-Year Course",
      description:
        "Deepen your web development knowledge with advanced skills and tools.",
      mainImage: "/courses/hero.png",
      miniImages: [
        "/courses/hero1.png",
        "/courses/hero2.png",
        "/courses/hero3.png",
        "/courses/hero4.png",
      ],
      rightText: "+234 Students",
    },
    {
      title: "3-Year Course",
      description:
        "A comprehensive program that fully prepares you for a career in web development.",
      mainImage: "/courses/hero.png",
      miniImages: [
        "/courses/hero1.png",
        "/courses/hero2.png",
        "/courses/hero3.png",
        "/courses/hero4.png",
      ],
      rightText: "+342 Students",
    },
  ];

  const courseFilters = [
    "All Programme",
    "6-Month Course",
    "1-Year Course",
    "2-Year Course",
    "3-Year Course",
  ];

  const [selectedFilter, setSelectedFilter] = useState("All Programme");

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
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Courses and Navigation */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous Button - Visible on mobile only */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`md:hidden bg-white shadow-lg p-2 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            <ArrowBack />
          </button>

          {/* Courses */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Desktop View - Show all courses */}
            <div className="hidden md:flex items-center gap-8 justify-center px-10">
              {filteredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  mainImage={course.mainImage}
                  miniImages={course.miniImages}
                  rightText={course.rightText}
                />
              ))}
            </div>

            {/* Mobile View - Show one course at a time with pagination */}
            <div className="flex md:hidden items-center justify-center">
              {currentCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  mainImage={course.mainImage}
                  miniImages={course.miniImages}
                  rightText={course.rightText}
                />
              ))}
            </div>
          </div>

          {/* Next Button - Visible on mobile only */}
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className={`md:hidden bg-white shadow-lg p-2 rounded-full transition-all duration-300 ${
              currentPage >= totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
