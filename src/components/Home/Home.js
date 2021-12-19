import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Event from '../Event/Event'
import Featured from '../Featured/Featured'
import NavigationBar from '../NavigationBar/NavigationBar'
import News from '../News/News'
import Service from '../Service/Service'
import Country from '../Country/Country'
import Testimonial from '../Testimonial/Testimonial'
import Join from '../Join/Join'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <About />
      <Featured />
      <Service />
      <News />
      <Event />
      <Country />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default Home
