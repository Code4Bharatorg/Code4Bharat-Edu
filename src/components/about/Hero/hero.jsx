// components/about-us/Hero.jsx

import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Education.Code4Bharat
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Building Careers with 
            Industry-Driven Tech Courses
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hero.png" // Replace with your image path
            alt="Hero Image"
            width={300} // Reduced width
            height={240} // Reduced height
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
