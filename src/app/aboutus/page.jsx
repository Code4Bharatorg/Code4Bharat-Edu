// pages/about-us.jsx

'use client';

import Navbar from "@/components/navbar/Navbar";
import HeroHome from "@/components/aboutus/Hero/hero";
import View from "@/components/aboutus/view/view";
import OurMission from "@/components/aboutus/ourmission/ourmission"; 
import OurVision from "@/components/aboutus/ourvision/ourvision";
import ChooseUs from "@/components/aboutus/chooseus/chooseus";
import Programs from "@/components/aboutus/ourprograms/programs";
import Footer from "@/components/footer/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHome />
      <View />
      <OurMission />
      <OurVision/>
      <ChooseUs/> 
      <Programs/>
      <Footer />
    </div>
  );
};

export default AboutUs;
