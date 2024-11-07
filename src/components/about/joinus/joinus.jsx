import React from 'react';

const JoinUs = () => {
  return (
    <section className="bg-blue-700 mb-12 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center min-h-[600px] mx-2 sm:mx-8 md:mx-16 lg:mx-16">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-syne mb-4">
          Join Us and <br /> Start Your Journey
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-syne leading-relaxed">
          Whether you’re taking your first steps in web development or seeking
          advanced skills, Education.Code4Bharat is here to guide you. Our
          courses are designed to transform students into job-ready
          professionals who are prepared to make a meaningful impact in the tech
          industry. Join us today to unlock a world of opportunities and start
          your journey toward a rewarding career in tech.
        </p>
      </div>

      {/* Right Form Section with Black Shadow Effect */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Black Background Div */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 w-full h-full bg-black rounded-lg"></div>

        {/* Main White Form Div */}
        <div className="relative bg-white text-black rounded-lg p-6 sm:p-8 shadow-md h-auto min-h-[300px] w-full sm:w-5/6 md:w-full">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-syne mb-4">Get your free audit</h3>
          <div className="mb-4 h-2 sm:h-3 bg-black relative rounded-lg">
            <div className="w-1/3 h-full bg-blue-300 rounded-lg"></div>
          </div>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 sm:p-4 font-syne border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              className="w-full mb-4 sm:mb-6 p-3 sm:p-4 font-syne border rounded-lg mt-4"
            />
           
            <button className="w-full py-2 bg-black text-white font-syne rounded-lg">Next</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
