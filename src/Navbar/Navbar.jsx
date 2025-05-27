import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assests'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
const Navbar = () => {
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.sofresh_logo} alt=" logo" className='logo' /> </Link>  
            
         <ul className="navbar-menu">
             <li> <Link to='/menu' className='nav-link'> Our Menu  </Link> </li> 
               <li>Find Us</li>
         </ul>
         <div className="navbar-right">
                  <img src={assets.search_icon} alt="" className='icon'/>
                      </div>
                      <button className='btn'>Order  Now</button>          
    </div>
  )
}

export default Navbar