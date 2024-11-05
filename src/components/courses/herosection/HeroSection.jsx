import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HeroSection = () => {
  return (
    <section className=" w-full h-auto md:h-[60vh] flex flex-col md:flex-row bg-[#116EB3] rounded-bl-2xl rounded-br-2xl overflow-hidden">
      {/* Left Section */}
      <div className="w-full  justify-center md:w-1/2 h-auto md:h-full flex flex-col p-5 md:p-10">
        {/* Tagline */}
        <div className="w-full mb-3 md:mb-0">
          <span className="text-[4vw] md:text-[1.2vw] font-medium bg-white px-3 py-1 rounded-xl inline-block">
            Never stop learning
          </span>
        </div>
        {/* Heading */}
        <div className="w-full text-white flex items-center mb-5 md:mb-0 relative">
          <h1 className="text-[7vw] md:text-[3.1vw] leading-tight font-bold z-10">
            Grow your skills with online courses from Code4Bharat
          </h1>

          {/* Decorative Bars - Responsive Design */}
          <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute top-[78%] left-0 md:left-20"></div>
          <div className="hidden md:block w-[10vw] h-2 bg-yellow-400 absolute top-[30%] right-0 md:right-[20%]"></div>
          <div className="hidden md:block w-[18vw] h-2 bg-yellow-400 absolute top-[100%]  md:right-[16%] transform rotate-3"></div>
        </div>

        {/* Button */}
        <button className="w-[50%] md:w-[24%] h-10 md:h-[12%] rounded-md bg-white text-black font-semibold">
          Explore Path
        </button>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center relative mt-5 md:mt-0">
        <div className="w-[80%] md:w-[70%] h-[50%] md:h-[70%] relative">
          <img
            src="/courseshero.png"
            alt="heroimage"
            className="w-full h-full object-contain"
          />
          {/* Small Image with Background */}
          <div className="w-10 h-10 md:w-[7%] md:h-[10%] lg:w-[8%] lg:h-[14%] rounded-md bg-orange-500 p-1 md:p-[4.5px] absolute right-5 md:right-28 bottom-28 md:bottom-40">
            <img
              src="/analyticsservices.png"
              alt="Analytics"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info Box */}
          <div className="w-[80%] md:w-[30%] lg:w-[40%] xl:w-[40%] flex items-center h-14 md:h-[20%] lg:h-[20%] xl:h-[20%] rounded-md bg-white bg-opacity-80 absolute bottom-5 md:bottom-32 left-5 md:-left-[10%]">
            <div className="w-full h-full flex items-center px-3 justify-around">
              <div className="w-10 h-10 md:w-[16%] md:h-[60%] lg:w-[18%] lg:h-[70%] xl:w-[20%] xl:h-[60%] bg-[#23BDEE] flex items-center justify-center rounded-md">
                <CalendarTodayIcon className="text-[5vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[4vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[1vw] font-medium">
                  250k
                </p>
                <p className="text-[3.5vw] md:text-[1vw] lg:text-[0.9vw] xl:text-[1vw] font-medium">
                  Assisted Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[10%] h-[20%] rounded-full bottom-0 left-[50%] top-[65%] bg-[#D2E6E4] absolute "></div>
    </section>
  );
};

export default HeroSection;
