"use client";
import React from "react";
import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"; // Importing Material-UI icon

const Courses = () => {
  return (
    <section className="bg-[#B2D5ED] py-16 px-4 md:px-8 mb-8 mt-2">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-4xl font-semibold text-blue-700 mb-4 ml-2 md:ml-20 font-publicSans text-left">
          Our Approach
        </h2>
        <p className="text-sm md:text-2xl text-[#6D737A] mb-6 md:mb-12 ml-2 md:ml-20 font-publicSans text-left">
          At Education.Code4Bharat, we combine technical training with career
          readiness, focusing on practical skills and industry standards
        </p>

        {/* Modified Grid Layout for Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Course Card 1 */}
          <CourseCard
            imageUrl="/courses/hero.png"
            title="Hands-On Learning"
            description="Every course includes real-world projects, giving you practical experience with challenges faced by industry professionals."
            customMargin="mt-4 md:mt-0 md:ml-36"
          />

          {/* Course Card 2 */}
          <CourseCard
            imageUrl="/courses/hero.png"
            title="Personalized Mentorship"
            description="Our instructors and mentors provide one-on-one guidance, helping you progress through your learning journey with confidence."
            customMargin="mt-4 md:mt-0 md:ml-4"
          />

          {/* Course Card 3 */}
          <CourseCard
            imageUrl="/courses/hero.png"
            title="Placement Preparation"
            description="Beyond technical skills, our courses include interview preparation, resume building, and soft skills training to ensure you’re fully prepared for the job market."
            customMargin="mt-8 md:mt-0 md:ml-56"
          />

          {/* Course Card 4 */}
          <CourseCard
            imageUrl="/courses/hero.png"
            title="Networking Opportunities"
            description="Connect with industry leaders, attend workshops, and participate in exclusive events to build a strong professional network."
            customMargin="mt-8 md:mt-0 md:ml-24"
          />
        </div>

        
      </div>
    </section>
  );
};

// Reusable CourseCard Component with Custom Margin
const CourseCard = ({ imageUrl, title, description, customMargin }) => {
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
        <h3 className="ml-2 text-base md:text-2xl font-bold font-publicSans">
          {title}
        </h3>
        <FormatQuoteIcon className="text-yellow-500 text-lg md:text-3xl ml-auto" />
      </div>
      <p className="text-xs md:text-lg text-gray-700 font-publicSans">
        {description}
      </p>
    </div>
  );
};

export default Courses;
