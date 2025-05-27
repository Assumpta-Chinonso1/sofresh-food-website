
import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Heros/Hero'
import Explore from './Explore/Explore'
import DiscountExplore from './DiscountExplores/Discountexplore'
import Latest from './Latest/Latest'
import SofreshStory from './SofreshStory/SofreshStory'
import Get from './Get/Get'
import Footer from './Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Menu from './Menu/Menu'


const App = () => {

  const location = useLocation();

  const isPageMenu = location.pathname ==='/menu'

  return (
    <div className='app'>
       <Navbar/>
      <Routes>
          <Route path="/" element={ <Hero/>} />
          <Route path="/menu" element={ <Menu/> } />
          

      </Routes>


   {!isPageMenu &&( 
   <> 
  
    <Explore/>
    <DiscountExplore/>
    <Latest/>
    <SofreshStory/>
    <Get/>
    <Footer/>
    </>
     )}
    </div>
  )
}

export default App