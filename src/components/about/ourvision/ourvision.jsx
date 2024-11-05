"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const OurVision = () => {
  return (
    <div className="max-w-[calc(100%-2rem)] mx-auto mb-12 mt-12 bg-blue-600 rounded-tl-[4rem] rounded-bl-none rounded-br-[2rem] rounded-tr-none flex flex-col md:flex-row items-center justify-between p-6 md:p-10 lg:p-14">
      {/* Left Image */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-6 flex justify-center">
        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto">
          <Image
            src="/vision.png" // Ensure this image exists in your public folder
            alt="Our Vision"
            layout="responsive" // Use responsive layout
            width={448} // Set a suitable width in pixels
            height={280} // Set a suitable height in pixels
            className="object-cover rounded-tl-[4rem] rounded-br-[2rem] shadow-lg"
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="text-black text-center md:text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold flex-1 px-4 md:px-0">
        <p>
          Our <span className="text-white">Vision</span>
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          We envision a future where every Indian student, regardless of
          financial background, can access top-notch tech education and
          confidently step into the workforce. Our goal is to be India’s most
          trusted name in tech education, offering a seamless journey from
          learning to employment. By staying closely aligned with industry
          standards and connecting students with real-world challenges, we aim
          to produce job-ready graduates who are well-prepared to drive
          innovation in India’s digital economy.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
