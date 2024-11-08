"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const CourseCard = ({ title, description, mainImage, miniImages, rightText }) => {
  return (
    <div className="w-full md:w-72 bg-[#FAFAFA] rounded-xl overflow-hidden relative flex flex-col shadow-md">
      {/* Main Image */}
      <div className="relative w-full h-56">
        <Image
          src={mainImage}
          alt={`${title} Main`}
          fill // Makes the image fill the container
          className="object-cover"
        />
      </div>

      {/* Mini Images and Right Text */}
      <div className="absolute mt-16 left-1/2 top-40 transform -translate-x-1/2 w-[85%] flex items-center justify-between px-3 py-2 rounded-3xl bg-[#dadada] shadow">
        {/* Mini Images */}
        <div className="flex items-center">
          {miniImages.map((image, index) => (
            <div
              key={index}
              className={`w-8 h-8 bg-white rounded-full overflow-hidden relative ${
                index !== 0 ? "-ml-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={`Student ${index + 1}`}
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
        <h4 className="text-lg md:text-xl font-bold text-[#116EB3] mt-4">{title}</h4>

        {/* Description */}
        <p className="text-sm md:text-base text-[#4D4D4D] mt-2 flex-grow">
          {description}
        </p>

        {/* Enroll Button */}
        <button className="mt-4 text-sm md:text-base rounded-md text-white px-4 py-2 bg-[#116EB3] hover:bg-[#0f5a99] transition-colors duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
