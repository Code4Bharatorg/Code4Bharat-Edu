import React from "react";

const Journey = () => {
  return (
    <div className="w-full h-[60vh] bg-[#116EB3] ">
      <div className="w-full h-[25%]  px-24 flex items-center">
        <h1 className="text-[2.5vw] font-bold">
          Ready to Start Your <span className="text-white">Journey? </span>
        </h1>
      </div>
      <div className="w-full h-[75] px-24 flex flex-col gap-5 text-white">
        <p className="text-[1vw] font-medium ">
          Whether you're a recent graduate, a working <br /> professional, or
          someone looking to switch <br /> careers, Education.Code4Bharat has a{" "}
          <br /> program for you
        </p>
        <p className="text-[1vw] font-medium ">
          Our courses are designed to build your skills <br /> , connect you
          with industry experts, and guide <br /> you toward a fulfilling career
          in tech. Start <br /> your journey with us today and unlock endless{" "}
          <br /> opportunities in the world of web development.
        </p>
      </div>
    </div>
  );
};

export default Journey;
