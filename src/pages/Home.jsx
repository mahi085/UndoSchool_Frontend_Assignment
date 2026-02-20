import React from 'react'
import AgeGroup from '../components/AgeGroup'
import FeaturedCourses from '../components/FeaturedCourses'
import Hero from '../components/Hero'
import NewLaunches from '../components/NewLaunches' 
import Filter from '../components/Filter'  
import PopulerCategory from '../components/PopulerCategory'
import TopTeacher from '../components/TopTeacher'
import Webinar from '../components/Webinar'
const Home = () => {
  return (
    <div className="pt-16">
       <Hero/> 
          <AgeGroup/>
          <NewLaunches/> 
          <FeaturedCourses/>
          <TopTeacher/>
          <Webinar/>    
          <PopulerCategory/>
          <Filter/>
    </div>
  )
}

export default Home
