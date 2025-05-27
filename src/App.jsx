
import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Heros/Hero'
import Explore from './Explore/Explore'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
    <Hero/>
    <Explore/>
    </div>
  )
}

export default App