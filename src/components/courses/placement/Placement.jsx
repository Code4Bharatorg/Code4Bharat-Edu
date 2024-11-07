import React from "react";

const Placement = () => {
  return (
    <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row">
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 h-auto md:h-full">
        <div className="w-full h-auto md:h-[20%] flex items-center justify-center py-4 md:py-0">
          <h1 className="text-[6vw] md:text-[4vw] lg:text-[3.5vw] font-bold text-[#06241B] text-center md:text-left px-6 md:px-0">
            Pay After <span className="text-[#116EB3]">Placement</span>
          </h1>
        </div>
        <div className="w-full h-auto md:h-[50%] flex items-center justify-center px-6 md:px-0">
          <p className="text-[4vw] md:text-[1.3vw] lg:text-[1.1vw] font-medium text-center md:text-left ml-6 md:ml-36 px-4 md:px-0">
            We understand the financial barriers to education and are committed to making tech careers accessible to everyone. Our pay-after-placement model allows students to enroll in our courses without upfront costs. You only start paying once you&apos;ve secured a job, letting you focus on learning and building your future without financial stress.
          </p>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex justify-center items-center py-4 md:py-0">
        <div className="w-[90%] md:w-[70%] h-[60vw] md:h-[70%]">
          <img
            src="/payafter3.jpg"
            alt="Placement"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Placement;
