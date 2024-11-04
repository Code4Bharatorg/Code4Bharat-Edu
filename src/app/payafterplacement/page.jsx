import PayAfterPlacementAbout from '@/components/about/payafterplacementabout/payafterplacementabout'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <PayAfterPlacementAbout/>
        <Footer/>
    </div>
  )
}

export default page