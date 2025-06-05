
 import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assests';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import './AddToCart.css'; 


const AddToCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
     <div className="navmeal-container">
     <nav className='navsss'>
            <h4>GET  12.5%  DISCOUNTS  ON  FOUR  WEEKS  MEAL  PLAN</h4>
          </nav>
    
        
          <header className="navmeal-header">
            <Link to='/'><img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" /></Link>
            <nav className="navmeal-nav">
              <ul>
                <li><a href="#detox">Detox Plan</a></li>
                <li><a href="#immunity">Immunity Combos</a></li>
                <li><a href="#mealplan">Meal Plan</a></li>
              </ul>
            </nav>
            <div className="navmeal-cart">
              <Link to='/cart'><img src={assets.cartt} alt="" className='cart' /></Link>
            </div>
    
          </header>
    
          <hr />
    
    
          <ul className="carrt">
            <li className='cart-nav'>Shopping Cart <ChevronRightIcon className="icon"/>  </li>  
             
            <li className='cart-nav'>Checkout details <ChevronRightIcon className="icon"/> </li>
              
            <li className='cart-nav'>Order Complete</li>
          </ul>
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No items in the cart yet.</p>
          <Link to="/store" className="shop-btn">Return to Shop</Link>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₦{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

     <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market </span> </h3>
      </footer>
    </div>
  );
};

export default AddToCart;


