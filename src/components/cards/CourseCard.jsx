import React from "react";

const CourseCard = ({ title, description, mainImage, miniImages, rightText }) => {
  return (
    <div className="w-[20%] h-[80%] rounded-xl bg-[#FAFAFA] overflow-hidden relative">
      {/* Main Image */}
      <div className="w-full h-[40%]">
        <img src={mainImage} alt="Main Course" className="w-full h-full object-cover" />
      </div>

      {/* Mini Images and Right Text */}
      <div className="w-[90%] flex items-center px-1 rounded-3xl h-[12%] bg-[#dadada] absolute left-[5%] bottom-48">
        {/* Mini Images */}
        <div className="w-[50%] h-full flex items-center">
          {miniImages.map((image, index) => (
            <div
              key={index}
              className={`w-7 h-7 bg-white rounded-full overflow-hidden ${
                index > 0 ? "-ml-3" : ""
              }`}
            >
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Right Text */}
        <div className="w-[50%] h-full flex items-center">
          <span className="text-[1vw] font-medium">{rightText}</span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-5 w-full h-[10%] flex items-center px-5">
        <h4 className="text-[1.5vw] font-bold text-[#116EB3]">{title}</h4>
      </div>

      {/* Description */}
      <div className="w-full h-[30%] px-5">
        <p className="text-[1vw] font-medium text-[#4D4D4D]">{description}</p>
      </div>

      {/* Enroll Button */}
      <div className="w-full h-[15%] flex items-center px-5">
        <button className="text-[1.2vw] rounded-md text-white px-5 py-1 bg-[#116EB3]">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
