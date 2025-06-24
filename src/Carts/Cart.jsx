
import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';

import './Cart.css';

const Cart = () => {
  const { addToCart } = useContext(CartContext);
  const { cartCount } = useCart();
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        {/*<div className="hamburger-icon">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
           </div>*/}
           <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
           <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
                </div>



        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <Link to="/cart">
            <img src={assets.cartt} alt="" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </Link>
        </div>

        <nav className="navmeal-nav">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </nav>
      </header>

      {/*{isMenuOpen && (
        <div className="mobile-nav open">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </div>
      )}*/}

      {isMenuOpen && (
  <div className="fullscreen-nav">
    <div className="close-icon">
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
    </div>
    <ul>
      <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
      <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
      <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
    </ul>
  </div>
)}


      <hr />

      <ul className="carrt">
        <li className={`cart-nav ${currentPath === '/cart' ? 'active' : ''}`}>
          <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
        </li>
        <li className={`cart-nav ${currentPath === '/Checkout' ? 'active' : ''}`}>
          <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
        </li>
        <li className={`cart-nav ${currentPath === '/complete' ? 'active' : ''}`}>
          <Link to="/complete">Order Complete</Link>
        </li>
      </ul>

      <div className="cart-content">
        <div className="empty-cart">
          <img src={assets.empty_cart} alt="Empty Cart" className="empty-cart-icon" />
          <h2>Your cart is currently empty!</h2>
          <Link to="/store" className="browse-store">Browse store</Link>
          <h3 className="new-in-store-title">New in store</h3>
        </div>
      </div>

      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product)
              navigation('/add')
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;

