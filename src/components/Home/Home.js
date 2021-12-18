import React from 'react'
import Banner from '../Banner/Banner'
import Featured from '../Featured/Featured'
import NavigationBar from '../NavigationBar/NavigationBar'

function Home() {
  return (
    <div id='home'>
      <NavigationBar />
      <Banner />
      <Featured />
    </div>
  )
}

export default Home
