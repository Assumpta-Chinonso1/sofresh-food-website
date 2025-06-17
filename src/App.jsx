
/*import React from 'react'
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
import FeelingTired from './SoFreshLifestyleBlog/FeelingTired'
import TheStory from './SofreshStory/TheStory'
import AddToCart from './AddToCart/AddToCart'
import CheckoutPage from './Checkout/Checkout'







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
  const isAddToCartPage = location.pathname === '/add';
  const isCheckoutPage = location.pathname === '/Checkout';
  


  return (
     <div className='app'>
    {isCheckoutPage ? (
      // Show only CheckoutPage when on /Checkout route
      <Routes>
        <Route path="/Checkout" element={<CheckoutPage/>} />
      </Routes>
    ) : (
            <>
        {/* Show navbar on other pages *
        {!isMealPlanPage && !isCArtPage && !isAddToCartPage && <Navbar />}

      <Routes>
          <Route path="/" element={ <Hero/>} />
          <Route path="/menu" element={ <Menu/> } />
           <Route path="/location" element ={ <Location/> } />
           <Route path="/mealplan" element =  {!isCArtPage && <NavMeal/> } />
           <Route path='/cart' element ={ <CartComponent/> }/>
           <Route path='/SoFreshLifeStyleBlog' element={<SoFreshLifeStyleBlog/>} />
           <Route path='/HealthyIndul' element={<HealthyIndul/>} />
           <Route path='/FeelingTired' element ={<FeelingTired/>} />
           <Route path='/TheStory' element ={ <TheStory/>} />
            <Route path='/add' element={<AddToCart/>} />
          
          
           
          

      </Routes>


   {!isPageMenu && !isLocationPage && !isMealPlanPage && !isCArtPage && !isBlogPage && !isHealthyIndulPage && !isFeelingTired && !isTheStory && !isAddToCartPage && ( 
   <> 
  
    <Explore/>
    <DiscountExplore/>
    <Latest/>
    <SofreshStory/>
    <Get/>
    <Footer/>
    </>
     )}
     {(isLocationPage || isBlogPage || isHealthyIndulPage || isFeelingTired || isTheStory ) && <Footer/>}
     </>
    )}
    </div>
  )
}

export default App*/

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Hero from './Heros/Hero'
import Explore from './Explore/Explore'
import DiscountExplore from './DiscountExplores/Discountexplore'
import Latest from './Latest/Latest'
import SofreshStory from './SofreshStory/SofreshStory'
import Get from './Get/Get'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import Location from './FindUs/Location'
import NavMeal from './NavMealPlan/NavMeal'
import CartComponent from './Carts/Cart'
import SoFreshLifeStyleBlog from './SoFreshLifestyleBlog/SoFreshLifeStyleBlog'
import HealthyIndul from './SoFreshLifestyleBlog/HealthyIndul'
import FeelingTired from './SoFreshLifestyleBlog/FeelingTired'
import TheStory from './SofreshStory/TheStory'
import AddToCart from './AddToCart/AddToCart'
import CheckoutPage from './Checkout/Checkout'

const App = () => {
  const location = useLocation()
  const pathname = location.pathname

  const isCheckoutPage = pathname === '/Checkout'

  return (
    <div className="app">
      {isCheckoutPage ? (
        <CheckoutPage />
      ) : (
        <>
          {/* Conditional Navbar */}
          {pathname !== '/mealplan' && pathname !== '/cart' && pathname !== '/add' && <Navbar />}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location" element={<Location />} />
            <Route path="/mealplan" element={<NavMeal />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/SoFreshLifeStyleBlog" element={<SoFreshLifeStyleBlog />} />
            <Route path="/HealthyIndul" element={<HealthyIndul />} />
            <Route path="/FeelingTired" element={<FeelingTired />} />
            <Route path="/TheStory" element={<TheStory />} />
            <Route path="/add" element={<AddToCart />} />
          </Routes>

          {/* Show Homepage Extras */}
          {pathname === '/' && (
            <>
              <Explore />
              <DiscountExplore />
              <Latest />
              <SofreshStory />
              <Get />
              <Footer />
            </>
          )}

          {/* Show Footer on some other pages */}
          {['/location', '/SoFreshLifeStyleBlog', '/HealthyIndul', '/FeelingTired', '/TheStory'].includes(pathname) && <Footer />}
        </>
      )}
    </div>
  )
}

export default App

