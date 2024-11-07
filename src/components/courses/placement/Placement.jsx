"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Placement = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/contact-us"); // Redirect to the contact-us page
  };

  return (
    <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row p-4 md:p-0">
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 h-auto md:h-full">
        <div className="w-full h-aut28md:h-[20%] flex items-center justify-center py-4 md:py-0">
          <h1 className="text-[8vw] md:text-[4vw] lg:text-[3.5vw] font-bold text-[#06241B] text-center md:text-left px-4 md:px-0 md:mr-4 mt-10 md:mt-20">
            Pay After <span className="text-[#116EB3]">Placement</span>
          </h1>
        </div>
        <div className="w-full h-auto md:h-[50%] md:ml-28 flex flex-col items-center md:items-start justify-center px-4 md:px-0 mt-4 md:mt-8">
          <p className="text-[4vw] md:text-[1.3vw] lg:text-[1.1vw] font-medium text-center md:text-left px-2 md:px-0 mb-4 md:mb-0">
            We understand the financial barriers to education and are committed to making tech careers accessible to everyone. Our pay-after-placement model allows students to enroll in our courses without upfront costs. You only start paying once you&apos;ve secured a job, letting you focus on learning and building your future without financial stress.
          </p>
          <button
            onClick={handleLearnMoreClick}
            className="mt-4 md:mt-12 px-4 md:px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex justify-center items-center py-4 md:py-0 mt-6 md:mt-0">
        <div className="w-[80%] md:w-[70%] h-[50vw] md:h-[70%]">
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
