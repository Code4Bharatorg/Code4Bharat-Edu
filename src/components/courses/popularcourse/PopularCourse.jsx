"use client";
import React, { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";

const PopularCourse = () => {
  // Sample data for multiple courses with updated image URLs
  const courses = [
    {
      title: "6-Month Course",
      description:
        "Gain core web development skills and industry-ready expertise. Completion certificate recognized by industry leaders.",
      mainImage: "/courses/hero.png", // Updated image path
      miniImages: [
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
      ],
      rightText: "+40 Students",
    },
    {
      title: "1-Year Course",
      description:
        "Build a solid foundation in web development, preparing you for specialized roles.",
      mainImage: "/courses/hero.png", // Updated image path
      miniImages: [
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
      ],
      rightText: "+11 Students",
    },
    {
      title: "2-Year Course",
      description:
        "Deepen your web development knowledge with advanced skills and tools.",
      mainImage: "/courses/hero.png", // Updated image path
      miniImages: [
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
      ],
      rightText: "+234 Students",
    },
    {
      title: "3-Year Course",
      description:
        "A comprehensive program that fully prepares you for a career in web development.",
      mainImage: "/courses/hero.png", // Updated image path
      miniImages: [
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
        "/courses/hero.png", // Updated image path
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
      : courses.filter((course) => course.title.includes(selectedFilter));

  return (
    <div className="w-full h-screen mt-14">
      <div className="w-full h-[20%] flex items-center justify-center relative">
        <h1 className="text-[5vw] md:text-[2.5vw] font-bold text-[#116EB3]">
          Popular Courses
        </h1>
        <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute bottom-[30%] left-[50%]" />
      </div>

      <div className="flex items-center gap-5 w-[60%] h-[10%] mx-auto justify-center">
        {courseFilters.map((filter) => (
          <button
            key={filter}
            aria-label={`Filter by ${filter}`}
            className={`px-4 text-[1.2vw] py-2 rounded-md font-medium ${
              selectedFilter === filter
                ? "bg-[#116EB3] text-white"
                : "border-[#818C96] border-[1.5px] text-[#818C96]"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="w-[100%] h-[70%] flex items-center gap-8 justify-center px-10">
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
    </div>
  );
};

export default PopularCourse;
