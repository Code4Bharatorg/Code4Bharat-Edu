'use client'
import Navbar from "@/components/navbar/navbar";
import About from "@/components/policies/about";
import Footer from "@/components/footer/footer";
import React from "react";

const page = () => {
  return <div className="w-screen h-screen overflow-x-hidden">
    <Navbar/>
    <About/>
    <Footer/>
  </div>;
};

export default page;
