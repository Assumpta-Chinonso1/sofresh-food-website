import { assets, customers_reviews } from '../assets/assests';
import { FaCartShopping } from 'react-icons/fa6';
import './NavMeal.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NavMeal = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const customerWidth = 210 + 30; 
      carousel.scrollTo({
        left: index * customerWidth,
        behavior: 'smooth',
      });
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const nextSlide = () => {
    if (currentIndex < customers_reviews.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div className="navmeal-container">
      <nav className='navsss'>
        <h4>GET  12.5%  DISCOUNTS  ON  FOUR  WEEKS  MEAL  PLAN</h4>
      </nav>

      <header className="navmeal-header">
      <Link to='/' >   <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />       </Link> 
        <nav className="navmeal-nav">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </nav>
        <div className="navmeal-cart">
          <FaCartShopping />
        </div>
      </header>

      <hr />

      {/* Banner Section */}
      <section className="navmeal-banner">
        <h1 className='pre'>
          Prioritize Your Health with Our So Fresh <span className='highlight'>Meal & Detox Plans</span>  + <br />
          Immunity Combos <span className="pre">today</span>
        </h1>
        <br />
        <p>
          Eating healthy is the ultimate self-care! Fuel your body, boost your energy, and strengthen your immunity with our expertly crafted meal plans and nutrient-packed combos.
        </p>
        <br />
        <p>
          🌟 Limited-Time Offer: Get 12.5% OFF our 4-Week Meal Plan! 🌟
        </p>
      </section>

      {/* Meal Plan Section */}
      <section id="mealplan" className="navmeal-section">
        <h2 className='mealll'>
          <span className='line'></span>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          MEAL PLAN
          <span className="line"></span>
        </h2>

        <p className='mealll-p'>Enjoy delicious, nourishing, balanced meals to fuel your body & keep you happy.</p>
        <div className="navmeal-products">
          <div className="navmeal-product">
            <img src={assets.yummy_feast} alt="Yummy Feast" />
            <p>YUMMY FEAST</p>
            <span>₦110,400.00 – ₦188,650.00</span>
            <button className="btns">Select Option</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.fresh_start} alt="Fresh Start" />
            <p>FRESH START</p>
            <span>₦80,800.00 – ₦133,875.00</span>
            <button className="btns">Select Option</button>
          </div>
        </div>
      </section>

      {/* Immunity Combos Section */}
      <section id="immunity" className="navmeal-section">
        <h2 className='mealll'>
          <span className='line'></span>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          IMMUNITY COMBOS
          <span className="line"></span>
        </h2>
        <p>Fortify Your Body with nature’s best defenders to keep you strong and energized this season!</p>
        <div className="navmeal-products">
          <div className="navmeal-product">
            <img src={assets.citrus_Gaurd} alt="Citrus Guard" />
            <span>₦11,500.00</span>
            <button className="btns">ADD TO CART</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.root_intense} alt="Root Intense" />
            <span>₦10,700.00</span>
            <button className="btns">ADD TO CART</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.green_vat} alt="Green Vat" />
            <span>₦21,400.00</span>
            <button className="btns">ADD TO CART</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.zesty_trop} alt="Zesty Trop" />
            <span>₦19,700.00</span>
            <button className="btns">ADD TO CART</button>
          </div>
        </div>
      </section>

      {/* Detox Plan Section */}
      <section id="detox" className="navmeal-section">
        <h2 className='mealll'>
          <span className='line'></span>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Detox Plan
          <span className="line"></span>
        </h2>
        <p>A refreshing reset to cleanse, recharge, and restore your vitality.</p>
        <div className="navmeal-products">
          <div className="navmeal-product">
            <img src={assets.reju_juc} alt="Rejuvenate Juice" />
            <span>₦66,200.00 – ₦109,500.00</span>
            <button className="btns">Select Option</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.refresh_sm} alt="Refresh Smoothie" />
            <span>₦63,000.00 – ₦105,000.00</span>
            <button className="btns">Select Option</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.fresh_up} alt="Fresh Up" />
            <span>₦66,200.00 – ₦109,500.00</span>
            <button className="btns">Select Option</button>
          </div>
          <div className="navmeal-product">
            <img src={assets.glow_up} alt="Glow Up" />
            <span>₦62,200.00 – ₦106,800.00</span>
            <button className="btns">Select Option</button>
          </div>
        </div>
      </section>

      <section className="navmeal-reviews">
        <h2 className='cust-h'>Loved by <strong className='s'>Our Customers!</strong></h2>
        <br />
        <p>See what our satisfied customers are saying about our products!</p>

        <div className="carousel-wrapper">
          <ChevronLeftIcon
            className={`carousel-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
          />
          <div className="navmeal-customers" ref={carouselRef}>
            {customers_reviews.map((item, index) => (
              <div className="navmeal-customer" key={index}>
                <img src={item.cust_1} alt={`Customer ${index + 1}`} />
                <div>
                  <p className='review'>{item.review}</p>
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <ChevronRightIcon
            className={`carousel-arrow ${currentIndex === customers_reviews.length - 1 ? 'disabled' : ''}`}
            onClick={nextSlide}
          />
        </div>

        <div className="dots">
          {customers_reviews.slice(0, 5).map((_, idx) => (
            <span
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToIndex(idx);
              }}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NavMeal;
