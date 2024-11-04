"use client";
import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import Material UI icons

const WhyChooseUsCards = () => {
  const [cardsPerPage, setCardsPerPage] = useState(4); // Responsive cards per page
  const [currentPage, setCurrentPage] = useState(0); // Current page index

  // Define card data manually
  const cards = [
    {
      id: 1,
      title: "Career-Ready Curriculum",
      content:
        "Our courses are designed by industry experts to ensure job-readiness from day one.",
      image: "/card1.png", // Image path from public folder
    },
    {
      id: 2,
      title: "100% Placement Assistance",
      content:
        "We support students through every stage of their job search, with pay-after-placement options for all.",
      image: "/card2.png",
    },
    {
      id: 3,
      title: "Flexible Learning Paths",
      content:
        "Choose from 6 months, 1-year, 2-year, or 3-year courses tailored to fit different career objectives.",
      image: "/card3.png",
    },
    {
      id: 4,
      title: "Accredited Certifications and Degrees",
      content:
        "Our programs offer diplomas, advanced diplomas, and full degrees in partnership with top NAAC A++ certified universities.",
      image: "/card4.png",
    },
    {
      id: 5,
      title: "Card 5",
      content: "Content for card 5.",
      image: "/card4.png",
    },
    {
      id: 6,
      title: "Card 6",
      content: "Content for card 6.",
      image: "/card3.png",
    },
    {
      id: 7,
      title: "Card 7",
      content: "Content for card 7.",
      image: "/card2.png",
    },
    {
      id: 8,
      title: "Card 8",
      content: "Content for card 8.",
      image: "/card1.png",
    },
    {
      id: 9,
      title: "Card 9",
      content: "Content for card 9.",
      image: "/card3.png",
    },
    {
      id: 10,
      title: "Card 10",
      content: "Content for card 10.",
      image: "/card2.png",
    },
    // Add more cards as needed
  ];

  // Update cardsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1); // Mobile devices
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // Tablets
      } else if (window.innerWidth < 1280) {
        setCardsPerPage(3); // Large desktops
      } else {
        setCardsPerPage(4); // Extra-large desktops
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages using Math.ceil
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Calculate the starting index of the cards to display
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
    <div className="p-6 mb-12 w-full max-w-8xl bg-white shadow-xl rounded-lg mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        Why <span className="text-blue-500">Choose </span> Us <br />
        Education.Code4Bharat?
      </h2>

      {/* Navigation and Cards Container */}
      <div className="flex items-center justify-center w-full flex-col md:flex-row gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          aria-label="Previous Page"
          className={`flex items-center justify-center w-10 h-10 bg-white text-black rounded-full shadow-xl ${
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200 transition"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <ArrowBack />
        </button>

        {/* Cards Grid */}
        <div className="flex flex-col items-center flex-1 mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-200 min-h-[400px] w-full sm:w-64 lg:w-72 flex flex-col"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                  loading="lazy"
                />
                <h2 className="text-xl text-center font-semibold text-blue-500">
                  {card.title}
                </h2>
                {/* Grey Line Under the Title */}
                <div className="h-0.5 bg-gray-300 w-full my-2"></div>
                <p className="mt-2 text-center flex-1">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`mx-1 w-3 h-3 rounded-full ${
                  currentPage === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400 transition"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          aria-label="Next Page"
          className={`flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full shadow-xl ${
            currentPage >= totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-500 transition"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
