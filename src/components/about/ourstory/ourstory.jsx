import React from 'react';

const OurStory = () => {
  return (
    <div className="max-w-[calc(100%-2rem)] mx-auto mb-12 mt-12 bg-blue-300 rounded-tl-[4rem] rounded-bl-none rounded-br-[2rem] rounded-tr-none flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-10">
      
      {/* Right Text */}
      <div className="text-black ml-0 md:ml-12 text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-syne flex-1 px-4 md:px-0">
        <p>Our Story</p>
        <p className="text-black text-left text-sm sm:text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          Education.Code4Bharat was born out of a shared passion for tech and education by the team at Edu Momentum LLP. Recognizing the need for practical, accessible education in web development, we launched Education.Code4Bharat to empower students across India. <br />
          Today, we’re proud to be a trusted partner in students’ journeys from learning to employment, continuously adapting our programs to meet the ever-evolving needs of the tech industry.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-6 md:mt-0 ml-0 md:ml-8 mb-6 md:mb-0 flex justify-center">
        <img
          src="/5.jpg" // Ensure this image exists in your public folder
          alt="Our Story"
          className="w-48 sm:w-56 md:w-64 lg:w-[28rem] h-auto object-cover rounded-tl-[4rem] rounded-br-[2rem] shadow-lg"
        />
      </div>
    </div>
  );
};

export default OurStory;
