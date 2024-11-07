"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OurCourses = () => {
  const router = useRouter();

  const handleCardClick = (coursePath) => {
    router.push(coursePath);
  };

  return (
    <div className="max-w-full mx-4 md:mx-8 mb-12 bg-[#116EB3] rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col p-6 md:p-8">
      {/* Header Section */}
      <div className="text-gray-700 mt-4 md:mt-8 md:ml-48 md:w-2/3 xl:w-1/2">
        <h2 className="text-4xl text-black md:text-5xl font-semibold">
          Our <span className="text-white">Courses</span>
        </h2>
        <p className="text-lg text-white md:text-xl mt-8 mb-6">
          Explore a range of flexible, career-focused programs that suit your timeline, goals, and interests.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-8 mb-4">
        {/* Card 1 */}
        <div
          onClick={() => handleCardClick("/courses")}
          className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200 cursor-pointer"
        >
          <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
            <Image
              src="/6MONTHS.png"
              alt="6-Month Course"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-[2rem] rounded-bl-md"
            />
          </div>
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">
            6-Month Course
          </h3>
          <p className="text-gray-600 mt-2">
            Gain core web development <br /> skills and industry-ready <br />
            expertise.
          </p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => handleCardClick("/courses")}
          className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200 cursor-pointer"
        >
          <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
            <Image
              src="/1YEAR.png"
              alt="1-Year Course"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-[2rem] rounded-bl-md"
            />
          </div>
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">
            1-Year Course
          </h3>
          <p className="text-gray-600 mt-2">
            Gain core web development <br /> skills and industry-ready <br />
            expertise.
          </p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => handleCardClick("/courses")}
          className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200 cursor-pointer"
        >
          <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
            <Image
              src="/2YEARS.png"
              alt="2-Year Course"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-[2rem] rounded-bl-md"
            />
          </div>
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">
            2-Year Course
          </h3>
          <p className="text-gray-600 mt-2">
            Deepen your web development knowledge with advanced skills and tools.
          </p>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => handleCardClick("/courses")}
          className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200 cursor-pointer"
        >
          <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
            <Image
              src="/13.png"
              alt="3-Year Course"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-[2rem] rounded-bl-md"
            />
          </div>
          <h3 className="text-blue-500 mt-4 text-xl font-semibold">
            3-Year Course
          </h3>
          <p className="text-gray-600 mt-2">
            A comprehensive program that fully prepares you for a career in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
