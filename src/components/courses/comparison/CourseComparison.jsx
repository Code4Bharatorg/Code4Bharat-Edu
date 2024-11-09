import React from "react";

export const CourseComparison = () => {
  return (
    <div className="w-full h-auto min-h-screen bg-[#f9fafb]">
      {/* Heading Section */}
      <div className="w-full h-auto py-8 flex items-center justify-center">
        <h1 className="text-[6vw] md:text-[3.5vw] font-bold text-[#06241B] text-center">
          Course <span className="text-[#116EB3]">Comparison</span> Chart
        </h1>
      </div>

      {/* Centering Wrapper */}
      <div className="flex justify-center items-center">
        {/* Table Section */}
        <div className="w-full max-w-5xl overflow-x-auto px-4 pb-8">
          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden bg-white">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="p-4 text-left font-medium text-[#4D4D4D] border-r border-gray-300">
                  Course
                </th>
                <th className="p-4 text-left font-medium text-[#4D4D4D] border-r border-gray-300">
                  Duration
                </th>
                <th className="p-4 text-left font-medium text-[#4D4D4D] border-r border-gray-300">
                  Certification
                </th>
                <th className="p-4 text-left font-medium text-[#4D4D4D] border-r border-gray-300">
                  Key Skills
                </th>
                <th className="p-4 text-left font-medium text-[#4D4D4D]">
                  Placement Assistance
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {[
                {
                  course: "2-Month (Fast Track Program) MERN Stack Course",
                  duration: "2 Months",
                  certification: "Full Stack Certificate(MERN Stack)",
                  skills: "SQL, HTML, CSS, JavaScript, React, Redux, Node, Express, MongoDB, Git, Web Development Capstone Project",
                  placement: "100% Placement Support",
                },
                {
                  course: "4-Month (In Depth Program) MERN Stack Course",
                  duration: "4 Months",
                  certification: "Full Stack Certificate(MERN Stack)",
                  skills: "SQL, HTML, CSS, JavaScript, React, Redux, Node, Express, MongoDB, Git, Web Development Capstone Project",
                  placement: "100% Placement Support",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors border-b border-gray-200`}
                >
                  <td className="p-4 border-r border-gray-300">{item.course}</td>
                  <td className="p-4 border-r border-gray-300">
                    {item.duration}
                  </td>
                  <td className="p-4 border-r border-gray-300">
                    {item.certification}
                  </td>
                  <td className="p-4 border-r border-gray-300">{item.skills}</td>
                  <td className="p-4">{item.placement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseComparison;
