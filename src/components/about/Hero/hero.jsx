// components/about-us/Hero.jsx

import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className="bg-blue-500 text-white py-12 md:py-20 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <p className="text-xl text-yellow-400 md:text-2xl mb-4 md:mb-6">
            Welcome to Education.Code4Bharat
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-16">
            Building Careers with <br />
            Industry-Driven <span className="text-yellow-400">Tech Courses</span>
          </h1>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hero.png" // Replace with your image path
            alt="Hero Image"
            width={500} // Increased width
            height={350} // Increased height
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
