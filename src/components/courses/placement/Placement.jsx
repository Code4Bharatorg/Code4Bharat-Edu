"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Placement = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/contact-us"); // Redirect to the contact-us page
  };

  return (
    <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row p-4 md:p-8 lg:p-12">
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center">
        <div className="text-center md:text-left px-4 md:px-0 md:ml-8 lg:ml-12 mb-4 md:mb-8">
          <h1 className="text-4xl md:text-3xl lg:text-2xl font-bold text-[#06241B]">
            100% <span className="text-[#116EB3]">Placement</span> Assistance for Every Student
          </h1>
        </div>
        <div className="px-4 md:px-0 md:ml-8 lg:ml-12">
          <p className="text-base md:text-lg lg:text-xl text-center md:text-left mb-4">
            Our commitment to your success doesn’t end with the course. With our 100% placement assistance, we’re here to support you every step of the way:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg space-y-2">
            <li>Personalized Career Support: From refining your resume to preparing for interviews, we provide tailored guidance to enhance your job prospects.</li>
            <li>Interview Preparation: Participate in mock interviews and workshops to build confidence and polish your skills.</li>
            <li>Industry Connections: We connect you with a network of companies actively seeking skilled web developers, giving you access to real job opportunities.</li>
          </ul>
          <button
            onClick={handleLearnMoreClick}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex justify-center items-center py-4 md:py-0">
        <div className="w-[80%] md:w-[70%] h-[50vw] md:h-[70%] lg:h-[60%]">
          <img
            src="/payafter3.jpg"
            alt="Placement"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Placement;
