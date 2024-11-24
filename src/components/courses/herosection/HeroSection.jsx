"use client"
import React, { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Image from "next/image";

const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Set current date only on the client
    const date = new Date().toLocaleDateString();
    setCurrentDate(date);
  }, []);

  return (
    <section className="w-full h-auto md:h-[60vh] flex flex-col md:flex-row bg-[#116EB3] rounded-bl-2xl rounded-br-2xl overflow-hidden relative mt-2">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col p-5 md:p-10 justify-center">
        {/* Tagline */}
        <div className="w-full mb-3 md:mb-5">
          <span className="text-[6vw] md:text-[1.2vw] font-medium bg-white px-3 py-1 rounded-xl inline-block">
            Never stop learning
          </span>
        </div>
        {/* Heading */}
        <div className="w-full text-white mb-5 md:mb-10 relative">
          <h1 className="text-[8vw] md:text-[3vw] leading-tight font-bold z-10">
            Grow your skills with online courses from Code4Bharat
          </h1>

          {/* Decorative Bars */}
          <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute top-[78%] left-0 md:left-20"></div>
          <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute top-[30%] right-0 md:right-[20%]"></div>
          <div className="hidden md:block w-[18vw] h-2 bg-yellow-400 absolute top-[100%] md:right-[16%] transform rotate-3"></div>
        </div>
        {/* Button */}
        <button className="w-[60%] md:w-[30%] lg:w-[24%] h-12 md:h-10 rounded-md bg-white text-black font-semibold">
          Explore Path
        </button>
        {/* Courses Hero Image on Small Screens */}
        <div className="block md:hidden w-full h-auto mt-5">
          <div className="relative w-full h-64">
            <Image
              src="/coursehome.png"
              alt="Hero Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/2 h-auto md:h-full items-center justify-center relative mt-5 md:mt-0">
        <div className="w-[80%] md:w-[70%] h-[50%] md:h-[70%] relative">
          {/* Main Image */}
          <div className="relative w-full h-full">
            <Image
              src="/coursehome.png"
              alt="Hero Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* Small Image with Background - Hidden on Small Screens */}
          <div className="hidden md:block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-md bg-orange-500 p-1 md:p-2 absolute right-5 md:right-20 bottom-20 md:bottom-32">
            <div className="relative w-full h-full">
              <Image
                src="/courses/hero.png"
                alt="Analytics"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Info Box - Hidden on Small Screens */}
          <div className="hidden md:flex w-[80%] md:w-[60%] lg:w-[50%] items-center h-16 md:h-20 rounded-md bg-white bg-opacity-80 absolute bottom-5 md:bottom-32 left-5 md:-left-[10%]">
            <div className="w-full h-full flex items-center px-3 justify-around">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#23BDEE] flex items-center justify-center rounded-md">
                <CalendarTodayIcon className="text-[2vw] lg:text-[1.5vw] text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[1.5vw] lg:text-[1.2vw] font-medium">
                  1000+
                </p>
                <p className="text-[1.2vw] lg:text-[1vw] font-medium">
                  Assisted Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Circle */}
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#D2E6E4] absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default HeroSection;
