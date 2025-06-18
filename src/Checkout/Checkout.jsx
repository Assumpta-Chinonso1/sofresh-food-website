import React, { useContext, useState } from 'react';
import './Checkout.css';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { assets } from '../assets/assests';
import { CartContext } from '../CartContext/CartContext';

const CheckoutPage = () => {
  const { cartItems, getTotalCartAmount, cartCount } = useContext(CartContext);
  const [showNote, setShowNote] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('ship');
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  const DELIVERY_FEE = 1000;
  const subtotal = getTotalCartAmount();
  const total = deliveryMethod === 'ship' ? subtotal + DELIVERY_FEE : subtotal;

  const handleApplyCoupon = () => {
    if (couponCode.trim() === '') {
      alert('Please enter a coupon code.');
      return;
    }
    alert(`Coupon "${couponCode}" applied!`);
  };

  const statesInLagos = [
    'Opebi (Ikeja), Lagos',
    'Yaba, Lagos',
    'Lekki Phase 1, Lagos',
    'Surulere, Lagos',
    'Victoria Island, Lagos'
  ];

  const countries = [
    'Nigeria',
    'Ghana',
    'Kenya',
    'South Africa',
    'Egypt'
  ];

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <Link to="/">
          <img src={assets.sofresh_logo} alt="Logo" className="navmeal-logo" />
        </Link>
        <nav className="navmeal-nav">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </nav>
        <div className="navmeal-cart">
          <Link to="/cart">
            <img src={assets.cartt} alt="Cart" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </Link>
        </div>
      </header>

      <hr />
      <ul className="carrt">
        <li className={`cart-nav ${currentPath === '/cart' ? 'active' : ''}`}>
          <Link to="/add">
            Shopping Cart <ChevronRightIcon className="icon" />
          </Link>
        </li>
        <li className={`cart-nav ${currentPath === '/Checkout' ? 'active' : ''}`}>
          <Link to="/Checkout">
            Checkout Details <ChevronRightIcon className="icon" />
          </Link>
        </li>
        <li className={`cart-nav ${currentPath === '/complete' ? 'active' : ''}`}>
          <Link to="/complete">Order Complete</Link>
        </li>
      </ul>

      <div className="checkout-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>No items in the cart yet.</p>
          </div>
        ) : (
          <>
            <div className="checkout-left">
              <section className="contact-info">
                <h2 className='h2'>Contact information</h2>
                <p className='adde'>We'll use this email to send you details and updates about your order.</p>
                <input type="email" placeholder="Email address" className="email-input" />
                <p className="checkout-note">You are currently checking out as a guest.</p>
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="subscribe" />
                  <label htmlFor="subscribe">
                    I would like to receive exclusive emails with discounts and product information
                  </label>
                </div>
              </section>

              <section className="delivery-method">
                <h2>Delivery</h2>
                <p>Select how you would like to receive your order.</p>
                <div className="delivery-options">
                  <button
                    className={`option ${deliveryMethod === 'ship' ? 'selected' : ''}`}
                    onClick={() => setDeliveryMethod('ship')}
                  >
                    🚚 Ship
                  </button>
                  <button
                    className={`option ${deliveryMethod === 'pickup' ? 'selected' : ''}`}
                    onClick={() => setDeliveryMethod('pickup')}
                  >
                    🏬 Pickup
                  </button>
                </div>
              </section>

              <section className="shipping-address">
                {deliveryMethod === 'ship' ? (
                  <>
                    <h2>Shipping address</h2>
                    <p>Enter the address where you want your order delivered.</p>
                    <select defaultValue="Nigeria">
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </select>

                    <div className="name-fields">
                      <input type="text" placeholder="First name" />
                      <input type="text" placeholder="Last name" />
                    </div>

                    <input type="text" placeholder="Address" />
                    <p className='p'>+ Add apartment, suite, etc.</p>

                    <div className="name-fields">
                      <input type="text" placeholder="City" />
                      <select defaultValue="Opebi (Ikeja), Lagos">
                        <option disabled>Choose your area in Lagos</option>
                        {statesInLagos.map((state, index) => (
                          <option key={index} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <input type="tel" placeholder="Phone number" />
                    <div className="checkbox-wrapper">
                      <input type="checkbox" id="subscribe" />
                      <label htmlFor="subscribe">
                        Use same address for billing
                      </label>
                    </div>

                    <section className="shipping-address">
                      <h2>Shipping Options</h2>
                      <div className="shipping-box">
                        <label className="shipping-label">
                          <input type="radio" checked readOnly />
                          <span className="shipping-text">Delivery Fee</span>
                        </label>
                        <span className="shipping-price">₦{DELIVERY_FEE.toLocaleString()}</span>
                      </div>
                    </section>
                  </>
                ) : (
                  <>
                    <div className='name-fields'>
                      <input type="text" placeholder="First name" />
                      <input type="text" placeholder="Last name" />
                    </div>
                    <input type="text" placeholder="Pickup address or landmark" />
                    <p>+ Add apartment, suite,</p>
                    <div className='name-fields'>
                      <input type="text" placeholder="City" />
                      <select defaultValue="Opebi (Ikeja), Lagos">
                        {statesInLagos.map((state, index) => (
                          <option key={index} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    <input type="tel" placeholder="Phone number" />
                    <div className="checkbox-wrapper">
                      <input type="checkbox" id="subscribe" />
                      <label htmlFor="subscribe">
                        Use same address for billing
                      </label>
                    </div>
                  </>
                )}
              </section>

              <section className="shipping-address">
                <h2>Payment options</h2>
                <div className="payment-box">
                  <div className="card-icons">
                    <img src={assets.pay} alt="Payment options" />
                  </div>
                  <strong>Debit/Credit Cards</strong>
                  <p>Make payment using your debit and credit cards</p>
                </div>
              </section>

              <div className="note-wrapper">
                <label className="note-label">
                  <input type="checkbox" onChange={(e) => setShowNote(e.target.checked)} />
                  <strong>Add a note to your order</strong>
                </label>
                {showNote && (
                  <textarea
                    placeholder="Write any special instructions for delivery..."
                    className="note-textarea"
                  />
                )}
              </div>

              <p className="terms">
                By proceeding with your purchase you agree to our
                <a href="/terms"> Terms and Conditions</a> and
                <a href="/privacy"> Privacy Policy</a>.
              </p>

              <button className="place-order-btn">Place Order</button>
            </div>

            <div className="checkout-right">
              <div className="order-summary">
                <h3>Order summary</h3>
                {cartItems.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="item-title">{item.name}</p>
                      <p className="item-price">₦{(item.price * item.quantity).toLocaleString()}</p>
                      <p className="item-desc">{item.description}</p>
                    </div>
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                ))}

                <div className="coupon-sections">
                  <div className="coupon-toggles" onClick={() => setShowCoupon(!showCoupon)}>
                    <span>Add a coupon</span>
                    <ChevronDownIcon className={`icon ${showCoupon ? 'rotated' : ''}`} />
                  </div>

                  {showCoupon && (
                    <div className="coupon-contents">
                      <div className="coupon-rows">
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

                <div className="price-summary">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  {deliveryMethod === 'ship' && (
                    <div className="delivery-fee">
                      <span>Delivery</span>
                      <span>₦{DELIVERY_FEE.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="total-row">
                    <strong>Total</strong>
                    <strong>₦{total.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>
          </>
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

export default CheckoutPage;





 