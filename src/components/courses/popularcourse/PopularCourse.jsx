"use client";
import React, { useState } from "react";
import CourseCard from "@/components/cards/coursecard";

const PopularCourse = () => {
  // Sample data for multiple courses
  const courses = [
    {
      title: "6-Month Course",
      description:
        "Gain core web development skills and industry-ready expertise. Completion certificate recognized by industry leaders.",
      mainImage:
        "https://i.pinimg.com/564x/23/cf/c7/23cfc7f1ae0f4d80abe4e844081f59f9.jpg",
      miniImages: [
        "https://i.pinimg.com/564x/23/cf/c7/23cfc7f1ae0f4d80abe4e844081f59f9.jpg",
        "https://i.pinimg.com/474x/12/ae/cf/12aecf49a634189aacf3d2cee910848f.jpg",
        "https://i.pinimg.com/474x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
        "https://i.pinimg.com/736x/ec/c7/d7/ecc7d7a86b93d47e1a41fa5e50e4cf2e.jpg",
      ],
      rightText: "+40 Students",
    },
    {
      title: "1-Year Course",
      description:
        "Build a solid foundation in web development, preparing you for specialized roles.",
      mainImage:
        "https://i.pinimg.com/564x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      miniImages: [
        "https://i.pinimg.com/736x/ec/c7/d7/ecc7d7a86b93d47e1a41fa5e50e4cf2e.jpg",
        "https://i.pinimg.com/474x/12/ae/cf/12aecf49a634189aacf3d2cee910848f.jpg",
        "https://i.pinimg.com/564x/23/cf/c7/23cfc7f1ae0f4d80abe4e844081f59f9.jpg",
        "https://i.pinimg.com/474x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      ],
      rightText: "+11 Students",
    },
    {
      title: "2-Year Course",
      description:
        "Deepen your web development knowledge with advanced skills and tools.",
      mainImage:
        "https://i.pinimg.com/564x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      miniImages: [
        "https://i.pinimg.com/736x/ec/c7/d7/ecc7d7a86b93d47e1a41fa5e50e4cf2e.jpg",
        "https://i.pinimg.com/474x/12/ae/cf/12aecf49a634189aacf3d2cee910848f.jpg",
        "https://i.pinimg.com/564x/23/cf/c7/23cfc7f1ae0f4d80abe4e844081f59f9.jpg",
        "https://i.pinimg.com/474x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      ],
      rightText: "+234 Students",
    },
    {
      title: "3-Year Course",
      description:
        "A comprehensive program that fully prepares you for a career in web development.",
      mainImage:
        "https://i.pinimg.com/564x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      miniImages: [
        "https://i.pinimg.com/736x/ec/c7/d7/ecc7d7a86b93d47e1a41fa5e50e4cf2e.jpg",
        "https://i.pinimg.com/474x/12/ae/cf/12aecf49a634189aacf3d2cee910848f.jpg",
        "https://i.pinimg.com/564x/23/cf/c7/23cfc7f1ae0f4d80abe4e844081f59f9.jpg",
        "https://i.pinimg.com/474x/ac/99/e3/ac99e3b7cf9e1f7d5682042e94b1db22.jpg",
      ],
      rightText: "+342 Students",
    },
  ];

  // State to keep track of the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All Programme");

  // Function to handle filtering
  const filteredCourses =
    selectedFilter === "All Programme"
      ? courses
      : courses.filter((course) => course.title.includes(selectedFilter));

  return (
    <div className="w-full h-screen mt-14">
      <div className="w-full h-[20%] flex items-center justify-center">
        <h1 className="text-[5vw] md:text-[2.5vw] font-bold text-[#116EB3]">
          Popular Courses
        </h1>
        <img
          src="/linecourses.png"
          alt=""
          className="hidden md:block transform rotate-45 w-24 absolute -bottom-14 left-[52%]"
        />
      </div>

      <div className="flex items-center gap-5 w-[60%] h-[10%] mx-auto">
        <button
          className={`px-4 text-[1.2vw] py-2 rounded-md font-medium ${
            selectedFilter === "All Programme"
              ? "bg-[#116EB3] text-white"
              : "border-[#818C96] border-[1.5px] text-[#818C96]"
          }`}
          onClick={() => setSelectedFilter("All Programme")}
        >
          All Programme
        </button>
        <button
          className={`px-4 text-[1vw] py-2 rounded-md font-medium ${
            selectedFilter === "6-Month Course"
              ? "bg-[#116EB3] text-white"
              : "border-[#818C96] border-[1.5px] text-[#818C96]"
          }`}
          onClick={() => setSelectedFilter("6-Month Course")}
        >
          6-Month Course
        </button>
        <button
          className={`px-4 text-[1vw] py-2 rounded-md font-medium ${
            selectedFilter === "1-Year Course"
              ? "bg-[#116EB3] text-white"
              : "border-[#818C96] border-[1.5px] text-[#818C96]"
          }`}
          onClick={() => setSelectedFilter("1-Year Course")}
        >
          1-Year Course
        </button>
        <button
          className={`px-4 text-[1vw] py-2 rounded-md font-medium ${
            selectedFilter === "2-Year Course"
              ? "bg-[#116EB3] text-white"
              : "border-[#818C96] border-[1.5px] text-[#818C96]"
          }`}
          onClick={() => setSelectedFilter("2-Year Course")}
        >
          2-Year Course
        </button>
        <button
          className={`px-4 text-[1vw] py-2 rounded-md font-medium ${
            selectedFilter === "3-Year Course"
              ? "bg-[#116EB3] text-white"
              : "border-[#818C96] border-[1.5px] text-[#818C96]"
          }`}
          onClick={() => setSelectedFilter("3-Year Course")}
        >
          3-Year Course
        </button>
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
