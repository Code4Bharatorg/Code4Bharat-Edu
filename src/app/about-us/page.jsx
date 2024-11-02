// pages/about-us.jsx

'use client';

import Navbar from "@/components/navbar/Navbar";
import OurVision from "@/components/about/ourvision/ourvision";
// import OurVision from "@/components/about/ourvision/ourvision";
import ChooseUs from "@/components/about/chooseus/chooseus";
import Programs from "@/components/about/ourprograms/programs";
import Footer from "@/components/footer/Footer";
import HeroAbout from "@/components/about/Hero/hero";
import ViewAbout from "@/components/about/view/view";
import OurMissionAbout from "@/components/about/ourmission/ourmission";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroAbout/>
      <ViewAbout/>
      <OurMissionAbout/>
      <OurVision/>
      <ChooseUs/> 
      <Programs/>
      <Footer />
    </div>
  );
};

export default page;
