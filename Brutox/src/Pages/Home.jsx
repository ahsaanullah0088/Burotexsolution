import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import WhoWeAre from '../Components/Navbar/Whoweare/Whoweare'
import Footer from '../Components/Footer/Footer'
import Logos from '../Components/Logos/Logos'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default Home
