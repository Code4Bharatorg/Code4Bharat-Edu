import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className="bg-[#116EB3] text-white py-8 md:py-8 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg text-yellow-400 md:text-xl mb-3 md:mb-4">
            Welcome to Education.Code4Bharat
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
            Building Careers with <br />
            Industry-Driven <span className="text-yellow-400">Tech Courses</span>
          </h1>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hero.png" // Replace with your image path
            alt="Hero Image"
            width={400} // Reduced width
            height={300} // Reduced height
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
