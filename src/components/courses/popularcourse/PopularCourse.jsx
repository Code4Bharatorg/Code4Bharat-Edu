"use client";
import React, { useState } from "react";
import CourseCard from "@/components/cards/CourseCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const PopularCourse = () => {
  // Updated data for the Bootcamp, 45 Days, and 4-Month courses
  const courses = [
    {
      title: "Bootcamp",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      mainImage: "/2months.webp", 
      miniImages: ["/harsh.jpg", "/dp4.jpg", "/dp3.jpg", "/dp5.jpg"], 
      rightText: "+5497 Students",
      syllabusPdf: "/syllabus/Bootcamp.pdf", // Link to syllabus PDF
    },
    {
      title: "45 Days Course",
      description:
        "A fast-track program designed to introduce the fundamentals of web development, providing you with essential skills to get started in the industry. Perfect for those seeking rapid learning and immediate job entry, this program includes project-based learning and full placement support.",
      mainImage: "/2months.webp",
      miniImages: ["/harsh.jpg", "/dp4.jpg", "/dp3.jpg", "/dp5.jpg"], 
      rightText: "+234 Students",
      syllabusPdf: "/syllabus/45 days.pdf", // Link to syllabus PDF
    },
    {
      title: "4-Month Course",
      description:
        "A comprehensive program that builds on foundational skills and covers intermediate-level web development concepts, ensuring you’re fully prepared to meet industry demands. This course combines extensive hands-on training with complete placement assistance for long-term career success.",
      mainImage: "/4months.webp",
      miniImages: ["/dp1.jpg", "/dp2.jpg", "/dp3.jpg", "/dp4.jpg"],
      rightText: "+839 Students",
      syllabusPdf: "/syllabus/4 months.pdf", // Link to syllabus PDF
    },
  ];

  const courseFilters = ["All Programme", "Bootcamp", "45 Days Course", "4-Month Course"];
  const [selectedFilter, setSelectedFilter] = useState("All Programme");
  const filteredCourses =
    selectedFilter === "All Programme"
      ? courses
      : courses.filter((course) => course.title === selectedFilter);

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
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Courses */}
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={course.mainImage}
              alt={course.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              {/* Title and Student Count */}
              <h3 className="text-lg font-bold text-[#116EB3]">{course.title}</h3>
              <div className="flex items-center mt-2">
                <div className="flex -space-x-2">
                  {course.miniImages.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt="Student"
                      className="w-6 h-6 rounded-full border border-white"
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-500">
                  {course.rightText}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-4">
                <a
                  href="https://wa.me/9594430295?text=Hey%20I%20am%20here%20to%20register%20for%20the%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#116EB3] text-white text-center py-2 rounded-md font-medium hover:bg-[#0e5a92]"
                >
                  Enroll Now
                </a>
                <a
                  href={course.syllabusPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 bg-gray-100 text-[#116EB3] text-center py-2 rounded-md font-medium hover:bg-gray-200"
                >
                  View Syllabus
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-4">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourse;
