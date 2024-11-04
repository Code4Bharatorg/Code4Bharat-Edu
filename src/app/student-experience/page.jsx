import Footer from '@/components/footer/footer'
import Review from '@/components/home/review/review'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default page