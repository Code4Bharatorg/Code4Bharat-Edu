import Programs from '@/components/about/ourprograms/programs'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Programs/>
        <Footer/>
    </div>
  )
}

export default page