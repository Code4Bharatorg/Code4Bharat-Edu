"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CourseCard = ({
  index,
  title,
  description,
  mainImage,
  miniImages,
  rightText,
  syllabus,
  isExpanded,
  toggleSyllabus,
}) => {
  return (
    <div className="w-full md:w-72 bg-[#FAFAFA] rounded-xl overflow-hidden relative flex flex-col shadow-md">
      {/* Main Image */}
      <div className="relative w-full h-56">
        <Image
          src={mainImage}
          alt={`${title} Main`}
          fill
          className="object-cover"
        />
      </div>

      {/* Mini Images and Right Text */}
      <div className="absolute mt-16 left-1/2 top-40 transform -translate-x-1/2 w-[85%] flex items-center justify-between px-3 py-2 rounded-3xl bg-[#dadada] shadow">
        {/* Mini Images */}
        <div className="flex items-center">
          {miniImages.map((image, idx) => (
            <div
              key={idx}
              className={`w-8 h-8 bg-white rounded-full overflow-hidden relative ${
                idx !== 0 ? "-ml-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={`Student ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Right Text */}
        <div className="text-right">
          <span className="text-sm font-medium">{rightText}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-12 px-4 pb-4">
        {/* Title */}
        <h4 className="text-lg md:text-xl font-bold text-[#116EB3] mt-4">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm md:text-base text-[#4D4D4D] mt-2">
          {description}
        </p>

        {/* Read More Button */}
        <button
          onClick={() => toggleSyllabus(index)}
          className="mt-4 px-4 py-2 bg-[#116EB3] text-white rounded-md hover:bg-[#0f5a99] transition-colors duration-300"
        >
          {isExpanded ? "Hide Syllabus" : "Read More"}
        </button>

        {/* Syllabus Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 overflow-hidden"
            >
              <h4 className="text-lg text-[#116EB3] mb-2">Syllabus:</h4>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                {syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enroll Now Button */}
        <Link href="/contact-us">
        <button className="mt-4 text-sm md:text-base rounded-md text-white px-4 py-2 bg-[#116EB3] hover:bg-[#0f5a99] transition-colors duration-300">
          Enroll Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
