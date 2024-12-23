'use client';
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import TermsAndConditions from '@/components/policies/Termsandconditions'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <TermsAndConditions/>
        <Footer/>
    </div>
  )
}

export default page