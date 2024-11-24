"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PayAfterPlacement = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-[24rem] lg:h-[28rem]">
            <Image
              src="/payafter.jpg" // Replace with your actual image path
              alt="Pay After Placement"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Take the Leap with <span className="text-blue-500">100% Placement</span> Programs
          </h2>

          <div className="text-base sm:text-lg md:text-xl text-gray-700 space-y-4">
            <div>
              <span className="font-bold text-gray-800">💼 100% Placement Guaranteed Program</span>
              <p>
                <strong>Duration:</strong> 4 Months
                <br />
                <strong>What You Get:</strong> Intensive training, real-world projects, and guaranteed placement opportunities tailored to your aspirations.
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-800">🚀 100% Placement Assistance Program</span>
              <p>
                <strong>Duration:</strong> 45 Days
                <br />
                <strong>What You Get:</strong> Personalized career guidance, mock interview sessions, and access to exclusive job openings.
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-800">Why Choose Us?</span>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personalized Career Support:</strong> Craft a standout resume, build your portfolio, and master the art of interviewing.
                </li>
                <li>
                  <strong>Real-World Practice:</strong> Engage in mock interviews and hands-on projects to hone your skills.
                </li>
                <li>
                  <strong>Industry Networks:</strong> Gain access to top-tier companies looking for talent like you.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919594430295?text=Hi,%20I%20am%20interested%20in%20your%20100%25%20Placement%20Programs.%20Can%20you%20please%20provide%20more%20details?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-black transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayAfterPlacement;
