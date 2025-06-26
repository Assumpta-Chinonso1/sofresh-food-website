import React, { useState } from 'react'
import './Hero.css'
import Order from '../Order/Order'

const Hero = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  const handleOrderClick = () => {
    setShowPopUp(true)
  }

  const closePopUp = () => {
    setShowPopUp(false)
  }

  return (
    <div className='Hero'>
      <div className="hero">
        <h1>
          More Than Food. <br />
          <span>It's A Lifestyle</span>
        </h1>
        <br />
        <button onClick={handleOrderClick} className='clib'>Order Now</button>
        {showPopUp && <Order onClose={closePopUp} />}
      </div>
    </div>
  )
}

export default Hero


