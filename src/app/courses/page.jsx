import Courses from '@/components/courses/approach/Course'
import { CourseComparison } from '@/components/courses/comparison/CourseComparison'
import HeroSection from '@/components/courses/herosection/HeroSection'
import Journey from '@/components/courses/journey/Journey'
import Placement from '@/components/courses/placement/Placement'
import PopularCourse from '@/components/courses/popularcourse/PopularCourse'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <PopularCourse/>
        <Placement/>
        <Courses/>
        <CourseComparison/>
        <Journey/>
        <Footer/>
    </div>
  )
}

export default page