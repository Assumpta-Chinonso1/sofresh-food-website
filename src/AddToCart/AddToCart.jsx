
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assests';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import './AddToCart.css';

const AddToCart = () => {
  const { cartItems, removeFromCart, addToCart, deleteFromCart } = useContext(CartContext);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState('So Fresh Ogudu');
  const [country, setCountry] = useState('Nigeria');
  const [city, setCity] = useState('Lagos');
  const [state, setState] = useState('Opebi (Ikeja), Lagos');

  const DELIVERY_FEE = selectedLocation.toLowerCase().includes('free') ? 0 : 1800;
  const calculateSubtotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const calculateTotal = () => calculateSubtotal() + DELIVERY_FEE;

  const locations = [
    'So Fresh Gbagada — Free',
    'So Fresh Opebi — Free',
    'So Fresh Ogudu',
    'So Fresh Yaba',
    'So Fresh MMA2',
    'So Fresh Lekki 1B',
    'So Fresh Ikoyi',
    'So Fresh Agungi',
    'So Fresh Isheri Estate',
    'So Fresh Port Harcourt',
    'So Fresh Ibadan',
    'So Fresh Wuse 2',
  ];

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <Link to="/"><img src={assets.sofresh_logo} alt="Logo" className="navmeal-logo" /></Link>
        <nav className="navmeal-nav">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </nav>
        <div className="navmeal-cart">
          <Link to="/cart"><img src={assets.cartt} alt="Cart" className="cart" /></Link>
        </div>
      </header>

      <hr />

      <ul className="carrt">
        <li className="cart-nav">Shopping Cart <ChevronRightIcon className="icon" /></li>
        <li className="cart-nav">Checkout Details <ChevronRightIcon className="icon" /></li>
        <li className="cart-nav">Order Complete</li>
      </ul>

      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <div className="empty-cart"><p>No items in the cart yet.</p></div>
        ) : (
          <div className="cart-grid">

            {/* LEFT SIDE */}
            <div className="cart-left">
              <div className="cart-header-row">
                <span className="product-header">Product</span>
                <span className="total-header">Total
                 
                </span>
              </div>
              <div className="divider" />

              {cartItems.map(item => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="price-display">₦{item.price.toLocaleString()}</p>
                    <p className="item-description">{item.description || ''}</p>

                    <div className="qty-control">
                      <button onClick={() => removeFromCart(item.id)} className="qty-btn">－</button>
                      <p className="qty-number">{item.quantity}</p>
                      <button onClick={() => addToCart(item)} className="qty-btn">＋</button>
                    </div>

                    <p className="product-total">₦{(item.price * item.quantity).toLocaleString()}</p>
                    <button onClick={() => deleteFromCart(item.id)} className="remove-btn">Remove item</button>
                  </div>
                </div>
              ))}

              <div className="divider" />
            </div>

            {/* RIGHT SIDE */}
            <div className="cart-summary">
              <h3>Cart Totals</h3>

              <div className="coupon-section">
                <div className="coupon-toggle" onClick={() => setShowCoupon(!showCoupon)}>
                  <span>Add a coupon</span>
                  <ChevronDownIcon className={`icon ${showCoupon ? 'rotated' : ''}`} />
                </div>
                {showCoupon && (
                  <div className="coupon-content">
                    <label htmlFor="coupon" className="coupon-label">Enter Coupon Code</label>
                    <input
                      type="text"
                      id="coupon"
                      className="coupon-input"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                    />
                    <button className="apply-btn">Apply</button>
                  </div>
                )}
              </div>

              <div className="cart-row"><span>Subtotal</span><span>₦{calculateSubtotal().toLocaleString()}</span></div>
              <div className="cart-row"><span>Delivery Fee</span><span>₦{DELIVERY_FEE.toLocaleString()}</span></div>

              <div className="delivery-section">
                <div className="delivery-toggle" onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}>
                      <ChevronDownIcon className={`input-dropdown-icon ${isDeliveryOpen ? 'rotated' : ''}`} />
                   <p className="delivery-location">
                     
                Collection from 40b Ogudu Rd, Kosofe, Lagos, Ogudu, Lagos, 105102
                   </p>
                 </div>


                {isDeliveryOpen && (
                  <>
                    <div className="select-wrapper">
                      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                        {['So Fresh Gbagada — Free', 'So Fresh Ogudu', 'So Fresh Opebi — Free'].map(loc => (
                          <option key={loc}>{loc}</option>
                        ))}
                      </select>
                      <ChevronDownIcon className="input-dropdown-icon" />
                    </div>

                    <div className="location-inputs">
                      {[
                        { label: 'Country/Region', value: country, setter: setCountry, options: ['Nigeria'] },
                        { label: 'City', value: city, setter: setCity, options: ['Lagos', 'Abuja', 'Port Harcourt'] },
                        { label: 'State', value: state, setter: setState, options: ['Opebi (Ikeja), Lagos', 'Sura, Lagos Island, Lagos', 'Wuse 2, Abuja'] }
                      ].map(({ label, value, setter, options }) => (
                        <div key={label} className="input-group">
                          <label>{label}</label>
                          <div className="select-wrapper">
                            <select value={value} onChange={(e) => setter(e.target.value)}>
                              {options.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                            <ChevronDownIcon className="input-dropdown-icon" />
                          </div>
                        </div>
                      ))}
                      <button className="delivery-check-btn">Check delivery options</button>
                    </div>
                  </>
                )}
              </div>

              <div className="location-dropdown">
                <p className="location-option">Choose Shipping Location:</p>
                {locations.map((loc, idx) => (
                  <label key={idx} className="location-option">
                    <input
                      type="radio"
                      value={loc}
                      checked={selectedLocation === loc}
                      onChange={() => setSelectedLocation(loc)}
                    />
                    <span className="custom-radio" /> {loc}
                  </label>
                ))}
              </div>

              <p className="grand-total">Total: ₦{calculateTotal().toLocaleString()}</p>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="Visa" />
          <img src={assets.master_c} alt="Mastercard" />
          <img src={assets.bank_t} alt="Bank Transfer" />
          <img src={assets.pal_pay} alt="PayPal" />
        </div>
        <h3 className="h3">Copyright 2025 <span>© So Fresh Neighbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default AddToCart;














