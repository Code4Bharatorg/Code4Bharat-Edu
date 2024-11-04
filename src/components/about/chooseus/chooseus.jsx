// src/components/ChooseUs.jsx

"use client";
import React, { useState } from 'react';
import RocketIcon from '@mui/icons-material/Rocket'; // Importing Material UI icons

const ChooseUs = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { icon: <RocketIcon fontSize="large" />, title: "Career-Ready Curriculum", description: "is to empower businesses of all sizes by providing affordable and effective digital marketing solutions. We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.", image: "/card4.png" },
    { icon: <RocketIcon fontSize="large" />, title: "100% Placement Assistance", description: "is to empower businesses of all sizes by providing affordable and effective digital marketing solutions. We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.", image: "/card2.png" },
    { icon: <RocketIcon fontSize="large" />, title: "Flexible Learning Paths", description: "is to empower businesses of all sizes by providing affordable and effective digital marketing solutions. We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.", image: "/card3.png" },
    { icon: <RocketIcon fontSize="large" />, title: "Real Industry Connections", description: "Gain access to industry leaders and real-world opportunities.", image: "/card4.png" },
    { icon: <RocketIcon fontSize="large" />, title: "Accredited Certifications", description: "Earn certifications from top universities and industry bodies.", image: "/card4.png" },
  ];

  const handleCardClick = (index) => {
    setSelectedFeature(selectedFeature === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto mt-0 py-16 text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Why <span className="text-blue-600">Choose</span> Us
      </h2>
      <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-8 md:mb-16">
        Education.Code4Bharat?
      </p>

      {/* Feature Cards in a Responsive Grid */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-2">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-64 md:w-56 lg:w-64">
            <div
              className="flex flex-col items-center bg-blue-200 rounded-lg p-4 md:p-6 hover:shadow-lg transform transition duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div className="text-blue-600 text-4xl md:text-5xl mb-4">{feature.icon}</div>
              <p className="text-sm md:text-md font-medium text-blue-600">{feature.title}</p>
            </div>

            {/* Conditionally render the detail div below the clicked card on mobile */}
            {selectedFeature === index && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-4 md:hidden flex flex-col items-center transition-all duration-300">
                {/* Left Side Texts */}
                <div className="text-left">
                  <h3 className="text-lg text-black font-semibold mb-2">{feature.title}</h3>
                  <p className="text-black text-sm">{feature.description}</p>
                </div>
                {/* Right Side Image */}
                <div className="flex justify-center mt-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-40 h-auto rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Render the detail div below the cards on larger screens */}
      {selectedFeature !== null && (
        <div className="mt-8 mx-auto w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 hidden md:flex flex-col md:flex-row items-center transition-all duration-300">
          {/* Left Side Texts */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">{features[selectedFeature].title}</h3>
            <p className="text-black text-base">{features[selectedFeature].description}</p>
          </div>
          {/* Right Side Image */}
          <div className="flex-1 flex justify-center mt-4 md:mt-0 md:ml-6">
            <img
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              className="w-60 h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseUs;
