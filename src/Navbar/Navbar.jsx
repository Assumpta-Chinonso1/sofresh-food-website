import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assests'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Order from '../Order/Order'

const Navbar = () => {

  const  [showPopUp, setShowPopUp] = useState(false)

  const handleOrderClick = () => {
    setShowPopUp(true)
  }

  const closePopUp = () => {
    setShowPopUp(false)
  }


  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.sofresh_logo} alt=" logo" className='logo' /> </Link>  
            
         <ul className="navbar-menu">
             <li> <Link to='/menu' className='nav-link'> Our Menu  </Link> </li> 
               <li> <Link to='/location' > Find Us  </Link></li>
         </ul>
         <div className="navbar-right">
                  <img src={assets.search_icon} alt="" className='icon'/>
                      </div>
                      <button onClick={handleOrderClick} className='btn'>Order  Now</button>   
                      {showPopUp && <Order onClose={closePopUp}/>}       
    </div>
  )
}

export default Navbar