"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const OurVision = () => {
  return (
    <div className="max-w-[calc(100%-2rem)] mx-auto mb-12 mt-12 bg-blue-600 rounded-tl-[4rem] rounded-bl-none rounded-br-[2rem] rounded-tr-none flex flex-col md:flex-row items-center justify-between p-6 md:p-10 lg:p-14">
      {/* Left Image */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-6 flex justify-center">
        <div className="relative w-64 sm:w-80 md:w-100 lg:w-[28rem] h-full">
          <Image
            src="/vison.png" // Ensure this image exists in your public folder
            alt="Our Vision"
            layout="responsive" // Use responsive layout
            width={500} // Set a suitable width in pixels
            height={300} // Set a suitable height in pixels
            className="object-cover rounded-tl-[4rem] rounded-br-[2rem]"
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="text-black text-center md:text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold flex-1 px-4 md:px-0">
        <p>
          Our <span className="text-white">Vision</span>
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          We empower India's youth with industry-ready skills and guaranteed
          career opportunities. Our mission is to bridge the gap between
          education and employment through innovative, practical learning. We
          strive to become the leading platform for building a tech-driven,
          self-reliant Bharat. By nurturing talent that drives future innovation
          and technological excellence, we aim to create a sustainable impact by
          transforming learners into leaders in the global IT landscape.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
