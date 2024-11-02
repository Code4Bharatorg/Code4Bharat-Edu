'use client'
import IntroCard from '@/components/cards/introcards';
import Footer from '@/components/footer/footer';
import HeroHome from '@/components/hero/heroHome';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <IntroCard/>
      <Footer/>
    </div>
  )
}

export default page;
