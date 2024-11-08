"use client";
import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Importing Material UI icons for navigation

const Review = () => {
  // Array to hold card data
  const cards = [
    { id: 1, title: "Individualized Mentorship", description: "Our mentors and instructors provide guidance at every stage of your learning journey.", image: "/dp4.jpg" },
    { id: 2, title: "Real-World Projects", description: "Each course includes hands-on projects, mirroring real industry challenges and solutions.", image: "/dp2.jpg" },
    { id: 3, title: "Flexible Learning", description: "Learn at your own pace with flexible learning options that fit your schedule.", image: "/harsh.jpg" },
    { id: 4, title: "Career Support", description: "Get access to career support services, including resume reviews and mock interviews.", image: "/dp3.jpg" },
    { id: 5, title: "Industry Certifications", description: "Earn industry-recognized certifications that enhance your resume and skillset.", image: "/dp1.jpg" },
    { id: 6, title: "Global Community", description: "Join a global community of learners and professionals from diverse backgrounds.", image: "/sanad.jpg" },
    { id: 7, title: "Expert Instructors", description: "Learn from experienced instructors who bring real-world knowledge to the classroom.", image: "/juned.jpg" },
    { id: 8, title: "Cutting-Edge Curriculum", description: "Stay updated with the latest industry trends through our cutting-edge curriculum.", image: "/dp5.jpg" }, 
  ];

  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const cardsPerPage = 2; // Number of cards to show at a time
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Calculate the cards to display for the current page
  const startIndex = currentPage * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  // Handlers for next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Student <span className="text-blue-500">Experience</span> and Support
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`bg-white shadow-lg p-2 rounded-full transition-all duration-300 ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
        >
          <ArrowBack />
        </button>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-12">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-sm md:max-w-md relative transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100"
            >
              <div className="flex items-center mb-4">
                <img src={card.image} alt={card.title} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-4" />
                <h3 className="font-semibold text-base md:text-lg">{card.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">{card.description}</p>
              <span className="absolute top-4 right-4 text-blue-500 text-2xl md:text-3xl font-bold">”</span>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className={`bg-blue-500 text-white p-2 rounded-full transition-all duration-300 ${
            currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          <ArrowForward />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentPage === index ? 'bg-blue-500' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
