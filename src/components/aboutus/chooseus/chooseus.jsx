"use client";
import React from 'react';
import { FaRocket } from 'react-icons/fa'; // Using a sample icon, replace as needed

const ChooseUs = () => {
  const features = [
    { icon: <FaRocket />, title: "Career-Ready Curriculum" },
    { icon: <FaRocket />, title: "100% Placement Assistance" },
    { icon: <FaRocket />, title: "Flexible Learning Paths" },
    { icon: <FaRocket />, title: "Real Industry Connections" },
    { icon: <FaRocket />, title: "Accredited Certifications and Degrees" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-0 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why <span className="text-blue-600">Choose</span> Us
      </h2>
      <p className="text-lg font-semibold text-gray-700 mb-8 underline decoration-orange-400">
        Education.Code4Bharat?
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-lg p-6 hover:shadow-lg transform transition duration-300 hover:-translate-y-2"
          >
            <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
            <p className="text-lg font-medium text-gray-800">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
