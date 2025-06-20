import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assests';
import { Link } from 'react-router-dom';
import Order from '../Order/Order';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOrderClick = () => {
    setShowPopUp(true);

  
    if (window.innerWidth > 720) {
      setMenuOpen(false);
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.sofresh_logo} alt="logo" className='logo' />
      </Link>

      {/* Desktop Nav Links */}
      <ul className='navbar-menu desktop-only'>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/location'>Find Us</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className={`hamburger mobile-only ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Orange line under navbar */}
      {menuOpen && <div className="mobile-top-line mobile-only"></div>}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={`navbar-menu mobile-only open`}>
          <div className="mobile-separator"></div>
          <li><Link to='/menu'>Our Menu</Link></li>
          <li><Link to='/location'>Find Us</Link></li>
          <li><img src={assets.search_icon} alt="search" className='icon' /></li>
          <li><button onClick={handleOrderClick} className='btn'>Order Now</button></li>
        </ul>
      )}

      {/* Desktop Right Side */}
      <div className="navbar-right desktop-only">
        <img src={assets.search_icon} alt="search" className='icon' />
        <button onClick={handleOrderClick} className='btn'>Order Now</button>
      </div>

      {/* Order Popup */}
      {showPopUp && <Order onClose={closePopUp} />}
    </div>
  );
};

export default Navbar;










