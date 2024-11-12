"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Placement = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/contact-us");
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-8 lg:p-12 gap-8 md:gap-12">
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4 md:gap-6 px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-[#06241B]">
          100% <span className="text-[#116EB3]">Placement</span> Assistance for Every Student
        </h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-[#06241B]">
          Our commitment to your success doesn’t end with the course. With our 100% placement assistance, we’re here to support you every step of the way:
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-lg space-y-2 text-[#06241B]">
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

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/5 h-auto">
          <img
            src="/payafter3.jpg"
            alt="Placement"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Placement;
