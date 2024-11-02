'use client'
import IntroCard from '@/components/cards/introcards';
import WhyChooseUsCards from '@/components/cards/whychooseuscards';
import Footer from '@/components/footer/footer';
import Brands from '@/components/home/brands/brands';
import HeroHome from '@/components/home/hero/heroHome';
import Ourcourses from '@/components/home/ourcourses/ourcourses';
import OurMission from '@/components/home/ourmission/ourmission';
import PayAfterPlacement from '@/components/home/payafterplacement/payafterplacement';
import Review from '@/components/home/review/review';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <IntroCard/>
      <OurMission/>
      <WhyChooseUsCards/>
      <Ourcourses/>
      <PayAfterPlacement/>
      <Review/>
      <Brands/>
      <Footer/>
      
    </div>
  )
}

export default page;
