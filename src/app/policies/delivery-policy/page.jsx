'use client';
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import ShippingPolicy from '@/components/policies/deliverypolicy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ShippingPolicy/>
        <Footer/>
    </div>
  )
}

export default page