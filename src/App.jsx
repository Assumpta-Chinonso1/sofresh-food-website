
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
import Location from './FindUs/Location'
import NavMeal from './NavMealPlan/NavMeal'


const App = () => {

  const location = useLocation();

  const isPageMenu = location.pathname ==='/menu'
  const isLocationPage = location.pathname === '/location'
  const isMealPlanPage = location.pathname === '/mealplan'


  return (
    <div className='app'>
      {!isMealPlanPage && <Navbar/>}
        {/*<Navbar/>*/}
      <Routes>
          <Route path="/" element={ <Hero/>} />
          <Route path="/menu" element={ <Menu/> } />
           <Route path="/location" element ={ <Location/> } />
           <Route path="/mealplan" element =  { <NavMeal/> } />
          

      </Routes>


   {!isPageMenu && !isLocationPage && !isMealPlanPage &&( 
   <> 
  
    <Explore/>
    <DiscountExplore/>
    <Latest/>
    <SofreshStory/>
    <Get/>
    <Footer/>
    </>
     )}
     {isLocationPage && <Footer/>}
     {isMealPlanPage}
    </div>
  )
}

export default App