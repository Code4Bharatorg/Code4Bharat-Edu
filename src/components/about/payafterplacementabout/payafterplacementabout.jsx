"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PayAfterPlacementAbout = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/contact-us"); // Redirect to the contact-us page
  };
  return (
    <div className="max-w-full mx-4 mt-2 md:mx-8 mb-16 bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="relative w-full h-64 md:h-80"> {/* Set the height for the image container */}
          <Image
            src="/payafter2.jpg" // Replace with the correct image path
            alt="Pay After Placement"
            layout="fill" // Use 'fill' to make the image cover the container
            objectFit="cover" // Ensure the image covers the container without distortion
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="text-gray-700 w-full md:w-2/3 text-left ml-6">
        <h2 className="text-2xl md:text-5xl font-semibold mb-4">
          100% <span className="text-blue-500">Placement</span> Assistance for Every Student
        </h2>
        <p className="text-sm md:text-lg sm:mr-12 leading-relaxed">
        Our commitment to your success doesn’t end with the course. With our 100% placement assistance, we’re here to support you every step of the way:<br/>
•	Personalized Career Support: From refining your resume to preparing for interviews, we provide tailored guidance to enhance your job prospects.<br/>
•	Interview Preparation: Participate in mock interviews and workshops to build confidence and polish your skills.<br/>
•	Industry Connections: We connect you with a network of companies actively seeking skilled web developers, giving you access to real job opportunities.<br/>
        </p>
        <button
          onClick={handleLearnMoreClick}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PayAfterPlacementAbout;
