import React from "react";

const JoinUs = () => {
  return (
    <section className="bg-blue-700 mb-12 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center min-h-[600px] mx-2 sm:mx-8 md:mx-16 lg:mx-16">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-syne mb-4">
          Join Us and <br /> Start Your Journey
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-syne leading-relaxed">
          Whether you’re taking your first steps in web development or seeking
          advanced skills, Education.Code4Bharat is here to guide you. Our
          courses are designed to transform students into job-ready
          professionals who are prepared to make a meaningful impact in the tech
          industry. Join us today to unlock a world of opportunities and start
          your journey toward a rewarding career in tech.
        </p>
      </div>

      {/* Right Section - Features & Benefits */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative bg-white text-black rounded-lg p-6 sm:p-8 shadow-md h-auto min-h-[300px] w-full sm:w-5/6 md:w-full">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-syne mb-4">
            Features & Benefits
          </h3>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              Comprehensive curriculum tailored for all levels.
            </li>
            <li className="mb-2">
              Real-world projects to enhance learning experience.
            </li>
            <li className="mb-2">
              Access to experienced mentors and career guidance.
            </li>
            <li className="mb-2">
              Flexible learning options to suit your schedule.
            </li>
            <li className="mb-2">
              Job placement support to help kickstart your career.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
