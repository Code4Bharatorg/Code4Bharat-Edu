'use client';

import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import ContactUs from '@/components/policies/contact'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page