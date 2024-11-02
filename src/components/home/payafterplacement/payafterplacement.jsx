import React from 'react';

const PayAfterPlacement = () => {
  return (
    <div className="max-w-full mx-4 md:mx-8 mb-12 bg-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Left Section - Text */}
      <div className="text-gray-700 w-full md:w-2/3 mb-6 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Pay After <span className="text-blue-500">Placement</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600">
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

      {/* Right Section - Image */}
      <div className="w-full md:w-1/3">
        <img
          src="/payafterplacement.png" // Replace with the correct image path
          alt="Pay After Placement"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default PayAfterPlacement;
