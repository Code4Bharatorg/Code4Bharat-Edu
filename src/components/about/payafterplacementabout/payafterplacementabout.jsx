import React from 'react';

const PayAfterPlacementAbout = () => {
  return (
    <div className="max-w-full mx-4 mt-2 md:mx-8 mb-16 bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src="/payafterplacement.png" // Replace with the correct image path
          alt="Pay After Placement"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="text-gray-700 w-full md:w-2/3 text-left">
        <h2 className="text-2xl md:text-5xl font-semibold mb-4">
          Pay After <span className="text-blue-500">Placement</span>
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          We’re committed to student success and offer a pay-after-placement
          option to remove financial barriers. With this model, students can
          focus on their learning journey and start paying after securing a job.
          <br /><br />
          That’s why we’re proud to offer a pay-after-placement option, designed
          to eliminate upfront financial burdens and give students the freedom
          to focus entirely on their learning journey. With this model, students
          can immerse themselves in developing their skills without the worry of
          immediate fees.
        </p>
      </div>
    </div>
  );
};

export default PayAfterPlacementAbout;
