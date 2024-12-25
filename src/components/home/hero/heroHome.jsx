"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image for optimized image handling

const HeroHome = () => {
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);



  const openPdfModal = () => setPdfModalOpen(true);
  const closePdfModal = (e) => {
    e.stopPropagation();
    setPdfModalOpen(false);
  };

  // Variants for the entire right section
  const rightSectionVariants = {
    initial: {
      rotate: 8, // Initial tilt
    },
    hover: {
      rotate: 0, // Straighten on hover
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };


  // Variants for individual content divs
  const itemVariants = {
    initial: { x: 0, y: 0 },
    hover: (direction) => ({
      x: direction.x,
      y: direction.y,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    }),
  };

  // WhatsApp Link Generator
  const openWhatsApp = () => {
    const whatsappNumber = "9594430295";
    const message = "Hello, I am interested in learning more about your courses!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative z-10 mt-2 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark 
                 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 
                 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* SVG Background Top-Right */}
      <div
        className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"
        aria-hidden="true"
      >
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Example Circle */}
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          {/* ... rest of your SVG content */}
          <defs>
            {/* Your SVG gradients and other definitions */}
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            {/* ... other gradient definitions */}
          </defs>
        </svg>
      </div>

      <div className="-mx-4 flex flex-wrap">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-4 -mt-2">
          <div className="mx-auto max-w-[800px] text-center md:text-left ml-0 md:ml-24">
            <p
              className="mb-12 text-base !leading-relaxed text-blue-600 dark:text-body-color-dark 
                          sm:text-xl md:text-3xl"
            >
              Education.Code4Bharat
            </p>
            <h1
              className="mb-5 text-4xl font-semibold leading-tight  text-[#434D58] font-publicSans
                           sm:text-4xl sm:leading-tight md:text-[4vw] md:leading-tight -mt-12 relative"
            >
              Empowering the <br /> Future of Tech{" "}
              <span className="text-[#116EB3]">Talent</span>
            </h1>
            <div className="hidden md:block w-[10%] h-2 bg-yellow-400 absolute bottom-[50%] left-0 md:left-[37%] transform rotate-3 "></div>

            <div
              className="flex flex-col items-center md:items-start justify-start space-y-4 sm:flex-row 
                            sm:space-x-4 sm:space-y-0"
            >
                          <button
  onClick={() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // Open in a new tab for mobile devices
      window.open("/brochure/b.pdf", "_blank");
    } else {
      // Open the modal for larger screens
      openPdfModal();
    }
  }}
  className="bg-blue-500 text-white border border-white px-4 py-2 md:px-6 md:py-3 shadow-lg rounded-md hover:bg-black hover:text-white hover:border-white transition z-20"
>
  Our Brochure
</button>
{isPdfModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-[100%] z-50"
    onClick={closePdfModal}
  >
    <div
      className="relative w-[100%] h-[85%] max-w-3xl bg-white p-2 md:p-6 lg:p-2"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closePdfModal}
        className="absolute top-2 right-2 text-red-500 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        aria-label="Close PDF Modal"
      >
        X
      </button>
      {/* Detect device size */}
      {typeof window !== "undefined" && window.innerWidth <= 768 ? (
        // Open in a new tab for mobile devices
        <p className="text-center text-sm">
          The PDF cannot be viewed directly on mobile.{' '}
          <a
            href="/brochure/b.pdf" // Replace with your actual PDF file link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Click here to view the PDF in a new tab
          </a>
        </p>
      ) : (
        // Embed the PDF for larger devices
        <iframe
          src="/brochure/b.pdf" // Replace with your actual PDF file link
          className="w-full h-[90%] md:h-[80vh] rounded-lg"
          title="PDF Viewer"
        ></iframe>
      )}
    </div>
  </div>
)}
            </div>
          </div>
        </div>

        {/* Right Column - Hidden on Mobile */}
        <motion.div
          className="hidden md:flex md:w-1/2 px-8 flex-wrap -mt-12"
          variants={rightSectionVariants}
          initial="initial"
          whileHover="hover"
        >
          {/* First Content Div */}
          <motion.div
            className="w-44 h-40 flex items-center justify-center mb-4 md:mb-0"
            custom={{ x: -30, y: -20 }}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/img04.svg" // Ensure this path is correct
                alt="Icon 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Second Content Div */}
          <motion.div
            className="w-44 h-40 flex items-center justify-center mt-4 md:mt-0 md:ml-4 mb-4 md:mb-0"
            custom={{ x: 40, y: -20 }}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/img05.svg" // Ensure this path is correct
                alt="Icon 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Third Content Div */}
          <motion.div
            className="w-full md:w-3/4 px-4 flex justify-center -mt-24 ml-0 md:ml-16 mb-4 md:mb-0"
            custom={{ x: -20, y: 20 }}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/img01.svg" // Ensure this path is correct
                alt="Icon 3"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Fourth and Fifth Content Divs */}
          <div className="w-full md:w-3/4 h-44 flex flex-col md:flex-row justify-center -mt-16 ml-0 md:ml-32 z-10 relative">
            {/* Fourth Content Div */}
            <motion.div
              className="w-full sm:w-80 flex items-center justify-center mb-4 md:mb-0"
              custom={{ x: -50, y: 0 }}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative w-full h-full bg-gray-300 dark:bg-blue-700 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img02.svg" // Ensure this path is correct
                  alt="Icon 4"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Fifth Content Div */}
            <motion.div
              className="w-full sm:w-80 flex items-center justify-center ml-0 md:ml-4"
              custom={{ x: 50, y: 0 }}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative w-full h-full bg-gray-300 dark:bg-blue-700 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img03.svg" // Ensure this path is correct
                  alt="Icon 5"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SVG Background Bottom-Left */}
      <div
        className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100"
        aria-hidden="true"
      >
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Example Path */}
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          {/* ... rest of your SVG content */}
          <defs>
            {/* Your SVG gradients and other definitions */}
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            {/* ... other gradient definitions */}
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroHome;
