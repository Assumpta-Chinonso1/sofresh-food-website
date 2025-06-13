
import {  useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assests';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import './AddToCart.css';
import { useCart } from '../CartContext/CartContext.jsx';

const AddToCart = () => {
  const { cartItems, removeFromCart, addToCart, deleteFromCart } = useContext(CartContext);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
const [isCityOpen, setIsCityOpen] = useState(false);
const [isStateOpen, setIsStateOpen] = useState(false);

const { cartCount } = useCart();


  const [selectedLocation, setSelectedLocation] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

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

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'fresh10') {
      alert('Coupon Applied: 10% Discount');
    } else {
      alert('Invalid Coupon');
    }
  };

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
          <Link to="/cart"><img src={assets.cartt} alt="Cart" className="cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
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
            <div className="cart-left">
              <div className="cart-header-row">
                <span className="product-header">Product</span>
                <span className="total-header">Total</span>
              </div>
              <div className="divider" />

              {cartItems.map(item => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-left">
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

                      <button onClick={() => deleteFromCart(item.id)} className="remove-btn">Remove item</button>
                    </div>
                  </div>

                  <div className="item-total">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}

              <div className="divider" />
            </div>

            <div className="cart-summary">
              <h3>Cart Totals</h3>
              <hr />

              <div className="coupon-section">
                <div className="coupon-toggle" onClick={() => setShowCoupon(!showCoupon)}>
                  <span>Add a coupon</span>
                  <ChevronDownIcon className={`icon ${showCoupon ? 'rotated' : ''}`} />
                </div>
                
                {showCoupon && (
                  <div className="coupon-content">
                    <div className="coupon-row">
                      <input
                        type="text"
                        id="coupon"
                        className="coupon-input"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter code"
                      />
                      <button className="apply-btn" onClick={handleApplyCoupon}>Apply</button>
                    </div>
                  </div>
                )}

                <hr />
              </div>

              <div className="cart-row"><span>Subtotal</span><span>₦{calculateSubtotal().toLocaleString()}</span></div>
              <div className="cart-row"><span>Delivery Fee</span><span>₦{DELIVERY_FEE.toLocaleString()}</span></div>

              <div className="delivery-section">
                <div className="delivery-delivery" onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}>
                  <p className="delivery-location">
                    Delivers <span> Opebi (Ikeja), Lagos, <ChevronDownIcon className={`input-dropdown-icon ${isDeliveryOpen ? 'rotated' : ''}`} /> <br />Nigeria</span>  
                  </p>
                </div>

                {isDeliveryOpen && (
                  <div className="location-inputs">


                {[
  {
    label: 'Country/Region',
    value: country,
    setter: setCountry,
    placeholder: 'Nigeria',
    options: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'United Kingdom', 'United States'],
    isOpen: isCountryOpen,
    setIsOpen: setIsCountryOpen
  },
  {
    label: 'City',
    value: city,
    setter: setCity,
    placeholder: 'Select City',
    options: ['Lagos', 'Abuja', 'Port Harcourt'],
    isOpen: isCityOpen,
    setIsOpen: setIsCityOpen
  },
  {
    label: 'State',
    value: state,
    setter: setState,
    placeholder: 'Opebi (Ikeja), Lagos',
    options: ['Opebi (Ikeja), Lagos', 'Sura, Lagos Island, Lagos', 'Wuse 2, Abuja'],
    isOpen: isStateOpen,
    setIsOpen: setIsStateOpen
  }
].map(({ label, value, setter, options, placeholder, isOpen, setIsOpen }) => (
  <div key={label} className="input-group">
    <div className="fake-select" onClick={() => {
      // Close all others first
      setIsCountryOpen(false);
      setIsCityOpen(false);
      setIsStateOpen(false);
      // Then open the one being clicked
      setIsOpen(!isOpen);
    }}>
      <p className="select-label">{label}</p>
      <div className="selected-value">
        {value || placeholder}
        <ChevronDownIcon className={`input-dropdown-icon ${isOpen ? 'rotated' : ''}`} />
      </div>
    </div>

    {isOpen && (
      <ul className="options-dropdown">
        {options.map((opt) => (
          <li key={opt} onClick={() => {
            setter(opt);
            setIsOpen(false);
          }}>{opt}</li>
        ))}
      </ul>
    )}
  </div>
))}

                    <button className="delivery-check-btn">Check delivery options</button>
                  </div>
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

      <a href="https://wa.me/234XXXXXXXXXX" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

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