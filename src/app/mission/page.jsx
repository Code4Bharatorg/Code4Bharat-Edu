import OurMissionAbout from '@/components/about/ourmission/ourmission';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <OurMissionAbout/>
        <Footer/>

    </div>
  )
}

export default page;