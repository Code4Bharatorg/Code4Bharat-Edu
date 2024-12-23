'use client';
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import PrivacyPolicy from '@/components/policies/privacy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PrivacyPolicy/>
        <Footer/>
    </div>
  )
}

export default page