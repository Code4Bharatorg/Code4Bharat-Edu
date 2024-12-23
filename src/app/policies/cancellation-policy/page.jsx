'use client';


import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import CancellationPolicy from '@/components/policies/cancellationpolicy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <CancellationPolicy/>
        <Footer/>
    </div>
  )
}

export default page