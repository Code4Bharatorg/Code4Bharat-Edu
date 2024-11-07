import React from "react";
import Image from "next/image"; // If you're using Next.js

const Journey = () => {
  return (
    <div className="w-full h-auto min-h-[60vh] bg-[#116EB3] flex flex-col md:flex-row items-center md:items-start px-8 mb-8 md:px-24 py-8 gap-6 md:gap-12">
      {/* Text Section */}
      <div className="w-full md:w-3/5 flex flex-col gap-6 text-white">
        <h1 className="text-[5vw] md:text-[2.5vw] font-bold leading-tight md:leading-none text-center md:text-left text-black">
          Ready to Start Your <span className="text-white">Journey?</span>
        </h1>
        <p className="text-[1.5rem] font-normal leading-relaxed text-justify">
          Whether you&apos;re a recent graduate, a working professional, or someone
          looking to switch careers, Education.Code4Bharat has a program for you.
        </p>
        <p className="text-[1.5rem] font-normal leading-relaxed text-justify">
          Our courses are designed to build your skills, connect you with
          industry experts, and guide you toward a fulfilling career in tech.
          Start your journey with us today and unlock endless opportunities in
          the world of web development.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-end items-center">
        <Image
          src="/herocourses.jpg" // Ensure the image path is correct
          alt="Journey Image"
          className="w-4/5 h-auto mr-12 object-contain rounded-md"
          width={400} // Adjust as needed
          height={300} // Adjust as needed
        />
      </div>
    </div>
  );
};

export default Journey;
