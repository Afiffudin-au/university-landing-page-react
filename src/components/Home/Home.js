import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Featured from '../Featured/Featured'
import NavigationBar from '../NavigationBar/NavigationBar'
import News from '../News/News'
import Service from '../Service/Service'

function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <About />
      <Featured />
      <Service />
      <News />
    </div>
  )
}

export default Home
