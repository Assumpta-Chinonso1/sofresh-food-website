import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets } from '../assets/assests'; 

const CheckoutPage = () => {
  const cartCount = 0; 
  const cartItems = [1]; 

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
        <li className="cart-nav">Shopping Cart <ChevronRightIcon className="icon" /></li>
        <li className="cart-nav">Checkout Details <ChevronRightIcon className="icon" /></li>
        <li className="cart-nav">Order Complete</li>
      </ul>

      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>No items in the cart yet.</p>
          </div>
        ) : (
          <div className="checkout-container">
            <div className="checkout-left">
              <section className="contact-info">
                <h2>Contact information</h2>
                <p>We'll use this email to send you details and updates about your order.</p>
                <input type="email" placeholder="Email address" />
                <div className="checkbox-group">
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
                  <button className="option selected">🚚 Ship</button>
                  <button className="option">🏬 Pickup</button>
                </div>
              </section>

              <section className="shipping-address">
                <h2>Shipping address</h2>
                <p>Enter the address where you want your order delivered.</p>
                <select>
                  <option>Nigeria</option>
                </select>
                <div className="name-fields">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="+ Add apartment, suite, etc." />
              </section>
            </div>

            <div className="checkout-right">
              <div className="order-summary">
                <h3>Order summary</h3>
                <div className="summary-item">
                  <img src="/path-to-your-product-image.jpg" alt="product" />
                  <div>
                    <p className="item-title">ROOT INTENSE COMBO</p>
                    <p className="item-price">₦10,700.00</p>
                    <p className="item-desc">Loaded with nature’s healing roots, this blend detoxifies...</p>
                  </div>
                  <span className="item-quantity">3</span>
                </div>

                {/* Add more items as needed */}

                <section className="shipping-method">
                  <h2>Shipping options</h2>
                  <div className="shipping-option-box">
                    <input type="radio" checked readOnly />
                    <span>Delivery Fee</span>
                    <span className="shipping-price">₦1,800.00</span>
                  </div>
                </section>

                <section className="payment-method">
                  <h2>Payment options</h2>
                  <div className="payment-box">
                    <div className="card-icons">
                      <img src="/paystack-logos.png" alt="Payment options" />
                    </div>
                    <strong>Debit/Credit Cards</strong>
                    <p>Make payment using your debit and credit cards</p>
                  </div>
                </section>

                <div className="note-checkbox">
                  <input type="checkbox" id="note" />
                  <label htmlFor="note"><strong>Add a note to your order</strong></label>
                </div>

                <p className="terms">
                  By proceeding with your purchase you agree to our 
                  <a href="/terms"> Terms and Conditions</a> and 
                  <a href="/privacy"> Privacy Policy</a>
                </p>

                <button className="place-order-btn">Place Order</button>

                <div className="coupon-section">
                  <label>Add a coupon</label>
                  <input type="text" placeholder="Enter code" />
                  <button className="apply-btn">Apply</button>
                </div>

                <div className="price-summary">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>₦32,100.00</span>
                  </div>
                  <div className="delivery-fee">
                    <span>Delivery</span>
                    <span>₦1,800.00</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

