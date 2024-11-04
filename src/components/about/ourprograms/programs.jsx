// src/components/Programs.jsx

"use client";
import React from 'react';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Importing Material-UI icon

const Programs = () => {
  return (
    <section className="bg-[#B2D5ED] py-16 px-4 md:px-8 mb-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-4xl font-semibold text-blue-700 mb-4 ml-2 md:ml-20 font-publicSans text-left">
          Our Programs
        </h2>
        <p className="text-sm md:text-2xl text-[#6D737A] mb-6 md:mb-12 ml-2 md:ml-20 font-publicSans text-left">
          We offer a variety of flexible, career-focused programs tailored to different learning needs and career aspirations:
        </p>

        {/* Modified Grid Layout for Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Program Card 1 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic1/200/200"
            title="6-Month Certification Program"
            description="For students seeking essential web development skills with immediate employability."
            customMargin="mt-4 md:mt-0 md:ml-36"
          />

          {/* Program Card 2 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic2/200/200"
            title="1-Year Diploma Program"
            description="Ideal for building a solid foundation in web development, preparing students for specialized roles."
            customMargin="mt-4 md:mt-0 md:ml-4"
          />

          {/* Program Card 3 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic3/200/200"
            title="3-Year Bachelor’s Degree"
            description="A comprehensive program that equips students with end-to-end knowledge and prepares them for leadership roles in web development."
            customMargin="mt-8 md:mt-0 md:ml-56"
          />

          {/* Program Card 4 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic4/200/200"
            title="2-Year Advanced Diploma"
            description="For those who want to gain deeper expertise in advanced web development techniques."
            customMargin="mt-8 md:mt-0 md:ml-24"
          />
        </div>

        <p className="mt-6 md:mt-12 text-center text-sm md:text-2xl text-[#6D737A] font-publicSans text-left ml-2 md:ml-28">
          Each program is designed to provide hands-on experience, real-world projects, <br className="hidden md:block" />
          and the professional skills needed to succeed in the tech industry.
        </p>
      </div>
    </section>
  );
};

// Reusable ProgramCard Component with Custom Margin
const ProgramCard = ({ imageUrl, title, description, customMargin }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-3 md:p-4 shadow-xl w-full max-w-full md:max-w-[75%] flex flex-col space-y-3 md:space-y-8 items-start transition-transform transform hover:scale-105 duration-300 ${customMargin}`}
    >
      <div className="flex items-center w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={30}
          height={30}
          className="rounded-full"
        />
        <h3 className="ml-2 text-base md:text-2xl font-bold font-publicSans">{title}</h3>
        <FormatQuoteIcon className="text-yellow-500 text-lg md:text-3xl ml-auto" />
      </div>
      <p className="text-xs md:text-lg text-gray-700 font-publicSans">{description}</p>
    </div>
  );
};

export default Programs;
