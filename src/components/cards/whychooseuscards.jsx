"use client";
import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image"; // Import Next.js Image component

const WhyChooseUsCards = () => {
  const [cardsPerPage, setCardsPerPage] = useState(4); // Responsive cards per page
  const [currentStartIndex, setCurrentStartIndex] = useState(0); // Starting index of the displayed cards

  // Define card data manually
  const cards = [
    {
      id: 1,
      title: "Career-Ready Curriculum",
      content:
        "Our courses are designed by industry experts to ensure job-readiness from day one.",
      image: "/careeer.jpg",
    },
    {
      id: 2,
      title: "100% Placement Assistance",
      content:
        "We support students through every stage of their job search, with pay-after-placement options for all.",
      image: "/placement.avif",
    },
    {
      id: 3,
      title: "Flexible Learning Paths",
      content:
        "Choose from 2 days bootcamp, 45 Days Fast Track and 4 Months courses tailored to fit different career objectives.",
      image: "/learning.jpg",
    },
    {
      id: 4,
      title: "Accredited Certifications",
      content:
        "Our programs offer Verify Certificates.",
      image: "/certification.jpg",
    },
    {
      id: 5,
      title: "Real Industry Connections",
      content:
        "Closely aligned with Code4Bharat, our students gain exposure to real-world tech challenges and insights from industry professionals.",
      image: "/industry.jpg",
    },
  ];

  // Duplicate cards to make scrolling continuous
  const extendedCards = [...cards, ...cards];

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

  // Calculate the cards to display based on the current start index
  const currentCards = extendedCards.slice(
    currentStartIndex,
    currentStartIndex + cardsPerPage
  );

  // Handle "Next" button click
  const handleNext = () => {
    setCurrentStartIndex((prevIndex) => {
      // Move to the next card, wrapping around if necessary
      const nextIndex = (prevIndex + 1) % cards.length;
      return nextIndex;
    });
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    setCurrentStartIndex((prevIndex) => {
      // Move to the previous card, wrapping around if necessary
      const previousIndex = (prevIndex - 1 + cards.length) % cards.length;
      return previousIndex;
    });
  };

  return (
    <div className="p-6 mb-12 w-full max-w-8xl bg-white shadow-xl rounded-lg mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
      
        Your Path to Guaranteed Success
      </h2>

      {/* Navigation and Cards Container */}
      <div className="flex items-center justify-center w-full flex-col md:flex-row gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          aria-label="Previous Page"
          className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full shadow-xl hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowBack />
        </button>

        {/* Cards Grid */}
        <div className="flex flex-col items-center flex-1 mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-200 min-h-[400px] w-full sm:w-64 lg:w-76 flex flex-col"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures the image covers the container without distortion
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-2xl text-center font-semibold text-blue-500">
                  {card.title}
                </h2>
                {/* Grey Line Under the Title */}
                <div className="h-0.5 bg-gray-300 w-full my-2"></div>
                <p className="mt-2 text-center flex-1">{card.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Page"
          className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full shadow-xl hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
