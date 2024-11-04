'use client';
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image for SVGs

const HeroHome = () => {
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

  return (
    <section
      id="home"
      className="relative z-10 mt-2 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark 
                 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 
                 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="-mx-4 flex flex-wrap">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-4 -mt-2">
          <div className="mx-auto max-w-[800px] text-center md:text-left ml-0 md:ml-24">
            <p className="mb-12 text-base !leading-relaxed text-blue-600 dark:text-body-color-dark 
                          sm:text-lg md:text-xl">
              Education.Code4Bharat
            </p>
            <h1 className="mb-5 text-3xl font-semibold leading-tight text-black dark:text-white 
                           sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight -mt-12">
              Empowering the <br /> Future of Tech <span className="text-blue-500">Talent</span>
            </h1>

            <div className="flex flex-col items-center md:items-start justify-start space-y-4 sm:flex-row 
                            sm:space-x-4 sm:space-y-0">
              <Link
                href="/"
                className="inline-block rounded-2xl bg-blue-600 px-12 py-3 text-base font-semibold 
                           text-white duration-300 ease-in-out hover:bg-black/90 
                           dark:bg-white/10 dark:text-white dark:hover:bg-white/5 
                           mx-auto md:mx-0 mt-12"
              >
                Explore
              </Link>
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
                src="img04.svg" // Replace with your SVG path
                alt="Icon 1"
                fill
                className="absolute top-0 left-0 object-cover" // Make it cover the entire div
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
                src="img05.svg" // Replace with your SVG path
                alt="Icon 2"
                fill
                className="absolute top-0 left-0 object-cover" // Make it cover the entire div
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
                src="img01.svg" // Replace with your SVG path
                alt="Icon 3"
                fill
                className="absolute top-0 left-0 object-cover" // Make it cover the entire div
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
                  src="img02.svg" // Replace with your SVG path
                  alt="Icon 4"
                  fill
                  className="absolute top-0 left-0 object-cover" // Make it cover the entire div
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
                  src="img03.svg" // Replace with your SVG path
                  alt="Icon 5"
                  fill
                  className="absolute top-0 left-0 object-cover" // Make it cover the entire div
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHome;
