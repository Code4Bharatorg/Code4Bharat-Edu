"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Placement = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 w-full h-auto py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#06241B]">
            100% <span className="text-[#116EB3]">Placement</span> Assistance for Every Student
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#06241B] leading-relaxed">
            Our commitment to your success doesn’t end with the course. With our 100% placement assistance, we’re here to support you every step of the way:
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg space-y-3 text-[#06241B]">
            <li>
              <strong>Personalized Career Support:</strong> From refining your resume to preparing for interviews, we provide tailored guidance to enhance your job prospects.
            </li>
            <li>
              <strong>Interview Preparation:</strong> Participate in mock interviews and workshops to build confidence and polish your skills.
            </li>
            <li>
              <strong>Industry Connections:</strong> We connect you with a network of companies actively seeking skilled web developers, giving you access to real job opportunities.
            </li>
          </ul>
          <Link
            href="/support-center"
            passHref
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-300 inline-block text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/payafter3.jpg"
              alt="Placement"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
