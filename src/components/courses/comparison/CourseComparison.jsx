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
                  course: "6-Month Certification",
                  duration: "6-Month",
                  certification: "Completion Certificate",
                  skills: "HTML, CSS, JavaScript, Responsive Design",
                  placement: "100% Placement Support",
                },
                {
                  course: "1-Year Diploma",
                  duration: "1 Year",
                  certification: "Diploma from NAAC A++ Certified University",
                  skills:
                    "Front-End & Back-End Development, Full-Stack Development, UX/UI Design",
                  placement: "Placement Support & Internships",
                },
                {
                  course: "2-Year Advanced Diploma",
                  duration: "2 Year",
                  certification: "Advanced Diploma from NAAC A++ University",
                  skills: "Advanced Full-Stack, AI, Mobile Development",
                  placement: "Career Mentorship & Placement",
                },
                {
                  course: "3-Year Bachelor’s Degree",
                  duration: "3 Year",
                  certification: "Bachelor’s Degree from NAAC A++ University",
                  skills: "Extensive Placement & Career Guidance",
                  placement: "Extensive Placement",
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
