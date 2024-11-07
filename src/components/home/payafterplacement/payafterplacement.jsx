"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const PayAfterPlacement = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/contact-us"); // Redirect to the contact-us page
  };

  return (
    <div className="max-w-full mx-4 md:mx-8 mb-16 bg-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Left Section - Text */}
      <div className="text-gray-700 w-full md:w-2/3 mb-6 md:mb-0">
        <h2 className="text-3xl text-black md:text-5xl font-semibold mb-8">
          Pay After <span className="text-blue-500">Placement</span>
        </h2>
        <p className="text-base md:text-lg text-black mt-4">
          We’re committed to student success and offer a pay-after-placement
          option to remove financial barriers. With this model, students can
          focus on their learning journey and start paying after securing a job.
          <br />
          <br />
          That’s why we’re proud to offer a pay-after-placement option, designed
          to eliminate upfront financial burdens and give students the freedom
          to focus entirely on their learning journey. With this model, students
          can immerse themselves in developing their skills without the worry of
          immediate fees.
        </p>
        
        {/* Learn More Button */}
        <button
          onClick={handleLearnMoreClick}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Learn More
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/3">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/payafter.jpg" // Replace with your actual image path
            alt="Pay After Placement"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PayAfterPlacement;
