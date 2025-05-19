import React from 'react'
import Navbar from './../../Layout/NavBar'
import Herosection from './../../Layout/HeroSection'
import Section1 from '../../Layout/Section1'
import Section2 from '../../Layout/Section2'
import Section3 from '../../Layout/Section3'
import Section4 from '../../Layout/Section4'
import Section5 from '../../Layout/Section5'
import Section6 from '../../Layout/Section6'
import Section7 from '../../Layout/Section7'
import Footer from './../../Layout/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  )
}

export default Home
