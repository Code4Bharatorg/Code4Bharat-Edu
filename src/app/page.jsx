'use client'
import IntroCard from '@/components/cards/introcards';
import Footer from '@/components/footer/footer';
import HeroHome from '@/components/home/hero/heroHome';
import OurMission from '@/components/home/ourmission/ourmission';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <IntroCard/>
      <OurMission/>
      <Footer/>
    </div>
  )
}

export default page;
