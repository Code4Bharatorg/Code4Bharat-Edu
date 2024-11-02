// src/components/OurVision.jsx

"use client";
import React from 'react';
// If you're importing an image from your project, uncomment the next line and adjust the path
// import visionImage from '../assets/visionImage.png';

const OurVision = () => {
  return (
    <div className="max-w-[calc(100%-4rem)] mx-auto mb-12 mt-18 ml-8 mr-0 h-auto bg-blue-600 rounded-tl-[4rem] rounded-bl-none rounded-br-[2rem] rounded-tr-none flex flex-col md:flex-row items-center justify-between p-10 md:p-14">
      {/* Left Image */}
      <div className="flex-1 mt-6 md:mt-0 md:mr-6 flex justify-center">
        <img
          src="/vision-image.png" // Ensure this image exists in your public folder
          alt="Our Vision"
          className="w-48 md:w-64 h-auto object-cover rounded-tl-[4rem] rounded-br-[2rem] shadow-lg"
        />
        {/* If you're importing an image, use the following instead:
        <img
          src={visionImage}
          alt="Our Vision"
          className="w-48 md:w-64 h-auto object-cover rounded-tl-[4rem] rounded-br-[2rem] shadow-lg"
        /> */}
      </div>

      {/* Right Text */}
      <div className="text-white text-center md:text-left text-3xl md:text-4xl font-bold flex-1">
        <p>
          Our <span className="text-gray-100">Vision</span>
        </p>
        <p className="text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
          We envision a future where every Indian student, regardless of<br/>
          financial background, can access top-notch tech education and<br/>
          confidently step into the workforce. Our goal is to be India’s most<br/>
          trusted name in tech education, offering a seamless journey from<br/>
          learning to employment. By staying closely aligned with industry<br/>
          standards and connecting students with real-world challenges, we<br/>aim
          to produce job-ready graduates who are well-prepared to drive<br/>
          innovation in India’s digital economy.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
