"use client";
import React from 'react';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Importing Material-UI icon

const Programs = () => {
  return (
    <section className="bg-[#B2D5ED] py-16 px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-700 mb-4 font-publicSans text-left">
          Our Programs
        </h2>
        <p className="text-[#6D737A] text-2xl mb-8 font-publicSans text-left">
          We offer a variety of flexible, career-focused programs tailored to different learning needs and career aspirations:
        </p>

        {/* Grid Layout for Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Program Card 1 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic1/150/150"
            title="6-Month Certification Program"
            description="For students seeking essential web development skills with immediate employability."
          />

          {/* Program Card 2 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic2/150/150"
            title="1-Year Diploma Program"
            description="Ideal for building a solid foundation in web development, preparing students for specialized roles."
          />

          {/* Program Card 3 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic3/150/150"
            title="3-Year Bachelor’s Degree"
            description="A comprehensive program that equips students with end-to-end knowledge and prepares them for leadership roles in web development."
          />

          {/* Program Card 4 */}
          <ProgramCard
            imageUrl="https://picsum.photos/seed/pic4/150/150"
            title="2-Year Advanced Diploma"
            description="For those who want to gain deeper expertise in advanced web development techniques."
          />
        </div>

        <p className="mt-8 text-2xl text-[#6D737A] font-publicSans">
          Each program is designed to provide hands-on experience, real-world projects, and the professional skills needed to succeed in the tech industry.
        </p>
      </div>
    </section>
  );
};

// Reusable ProgramCard Component
const ProgramCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4 items-start">
      <div className="flex items-center w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h3 className="ml-4 text-lg font-bold font-publicSans">{title}</h3>
        <FormatQuoteIcon className="text-yellow-500 text-2xl ml-auto" /> {/* Using Material-UI icon */}
      </div>
      <p className="text-gray-600 font-publicSans">{description}</p>
    </div>
  );
};

export default Programs;
