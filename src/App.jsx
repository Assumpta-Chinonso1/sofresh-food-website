
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
import CartComponent from './Carts/Cart'
import SoFreshLifeStyleBlog from './SoFreshLifestyleBlog/SoFreshLifeStyleBlog'
import HealthyIndul from './SoFreshLifestyleBlog/HealthyIndul'
import FeelingTried from './SoFreshLifestyleBlog/feelingTried'
import TheStory from './SofreshStory/TheStory'


const App = () => {

  const location = useLocation();

  const isPageMenu = location.pathname ==='/menu'
  const isLocationPage = location.pathname === '/location'
  const isMealPlanPage = location.pathname === '/mealplan'
  const isCArtPage = location.pathname === '/cart'
  const isBlogPage = location.pathname === '/SoFreshLifeStyleBlog'
  const isHealthyIndulPage = location.pathname === '/HealthyIndul'
  const isFeelingTired = location.pathname === '/FeelingTired'
  const isTheStory = location.pathname === '/TheStory'
  


  return (
    <div className='app'>
      {!isMealPlanPage && !isCArtPage && <Navbar/>}
        {/*<Navbar/>*/}
      <Routes>
          <Route path="/" element={ <Hero/>} />
          <Route path="/menu" element={ <Menu/> } />
           <Route path="/location" element ={ <Location/> } />
           <Route path="/mealplan" element =  {!isCArtPage && <NavMeal/> } />
           <Route path='/cart' element ={ <CartComponent/> }/>
           <Route path='/SoFreshLifeStyleBlog' element={<SoFreshLifeStyleBlog/>} />
           <Route path='/HealthyIndul' element={<HealthyIndul/>} />
           <Route path='/feelingTired' element ={<FeelingTried/>} />
           <Route path='/TheStory' element ={<TheStory/>} />
          

      </Routes>


   {!isPageMenu && !isLocationPage && !isMealPlanPage && !isCArtPage && !isBlogPage && !isHealthyIndulPage && !isFeelingTired && !isTheStory && ( 
   <> 
  
    <Explore/>
    <DiscountExplore/>
    <Latest/>
    <SofreshStory/>
    <Get/>
    <Footer/>
    </>
     )}
     {(isLocationPage || isBlogPage || isHealthyIndulPage || isFeelingTired || isTheStory) && <Footer/>}
     
    </div>
  )
}

export default App