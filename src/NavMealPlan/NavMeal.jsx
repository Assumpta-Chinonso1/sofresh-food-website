 import { assets, customers_reviews } from '../assets/assests';
import { FaCartShopping } from 'react-icons/fa6';
import './NavMeal.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import { FiMenu, FiX } from 'react-icons/fi';


 const NavMeal = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };




  const { cartCount } = useCart();

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
           <Link to='/cart'> <img src={assets.cartt} alt=""  className='cart'/> </Link>
          {/*<span className="cart-count">0</span> */}
                  <span className="cart-count-badge">{cartCount}</span>

           <div className="cart-dropdown">
           
            <Link to='/cart'> <img src={assets.cartt} alt=""  className='cart'/> </Link>
            <p>No products in the cart.</p>
            <Link to="/store" className="return-shop">RETURN TO SHOP</Link>
          </div>
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
       {/* Hamburger (shown only on mobile) */}
{/* Hamburger (Mobile Only) */}
<button className="hamburgers" onClick={toggleMenu}>
  {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
</button>

{menuOpen && (
  <div className="mobile-nav-menu">
    <a href="#detox" onClick={toggleMenu}>Detox Plan</a>
    <a href="#immunity" onClick={toggleMenu}>Immunity Plan</a>
    <a href="#mealplan" onClick={toggleMenu}>Meal Plan</a>
  </div>
)}


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
        <p className='mealll-p'>Fortify Your Body with nature’s best defenders to keep you strong and energized this season!</p>
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
        <p className='mealll-p'>A refreshing reset to cleanse, recharge, and restore your vitality.</p>
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

<section id="mealplan" className="navmeal-section">
  <h2 className="mealll">
    <span className="line"></span>
    <svg xmlns="http://www.w3.org/2000/svg"
      className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    FAQs
    <span className="line"></span>
  </h2>
  <p className="navMeal-questions">Got Questions? We’ve Got Answers!</p>
  <h1 className="general">General Questions</h1>

 

  {/* FAQ Items */}
  {[
    {
      question: "What is a meal plan?",
      answer: "A Meal Plan is a structured program that provides balanced, nutrient-rich meals tailored to support your wellness goals. Our plans include a rich blend of salads, rice bowls, potato bowls, pasta bowls, wraps, sandwiches, juices, smoothies, and parfaits designed to make healthy eating convenient and enjoyable, delivered daily for your ease."
    },
    {
      question: "What is a Detox Plan?",
      answer: "A Detox Plan is a short-term program focused on cleansing your body, boosting your energy, and improving overall well-being. It includes juices, smoothies, fruit cups, salads, or a combination of both, made from fresh, natural ingredients to help rejuvenate your system."
    },
    {
      question: "What would I get in a Meal Plan?",
      answer: "With a Meal Plan, you’ll receive two items daily, which could include a mix of salads, juices, parfaits, sandwiches, wraps, or fruit cups. For example, you might get:A juice and salad, a parfait and wrap, or a sandwich and fruit cup."
    },
    {
      question: "What do I get in a Detox Plan?",
      answer: "In a Detox Plan, you’ll receive a variety of 4 to 5 juices or smoothies daily. On some days, your plan may include a fruit cup or salad as a substitute for one of the juices or smoothies, depending on the specific plan you choose."
    },
    {
      question: "How are the meals and detox items delivered?",
      answer: "Deliveries are made once daily in the morning for the duration of your plan. All items must be immediately stored in the refrigerator or consumed right away to maintain freshness and quality."
    },
    {
      question: "What ingredients are used in the products?",
      answer: "Our meals and detox products are made daily with high-quality ingredients, including fresh fruits, vegetables, creamy yogurt, crunchy granola, and natural herbs and spices. Each combination is carefully curated for optimal taste, nutrition, and satisfaction."
    },
    {
      question: "Do your products contain preservatives?",
      answer: "No! At So Fresh, we pride ourselves on delivering preservative-free, all-natural products. Everything is freshly made to ensure maximum nutrients and flavor."
    },
    {
      question: "How long will my product stay fresh?",
      answer: "Our parfaits, yogurts, smoothies, and juices are made fresh daily and should be consumed within the same day for the best experience. Greek yogurts come with expiry dates that should be adhered to."
    },
    {
      question: "How should I store the products?",
      answer: "We recommend refrigerating all parfaits, yogurts, juices, and smoothies to maintain their freshness and quality. Ensure all containers are sealed tightly before storing."
    }
  ].map((faq, index) => (
    <details key={index} className="faq-item">
      <summary className="faq-question">
        <svg xmlns="http://www.w3.org/2000/svg"
          className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {faq.question}
      </summary>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </details>
  ))}

   <h1 className="general">
    Choosing the Right Plan
  </h1>

   {[
    {
      question: "Which plan is the best option for me?",
      answer: "The best plan for you depends on your goals:For long-term healthy eating, choose a  Meal Plan(Fresh Start or Yummy Feast).For a short-term cleanse or reset, a Detox Plan(Rejuvenate, Fresh Up, Refresh, or Glow Up) is ideal.If you’re unsure, send us a WhatsApp at 08062868430 for a free consultation to determine the best fit for your needs"
    },
    {
      question: "What are the health benefits of your products?",
      answer: "Our products are packed with vitamins, minerals, and antioxidants to support immunity, digestion, weight management, and overall vitality. They help you maintain a healthy lifestyle and promote sustainable energy throughout the day."
    },
    
       
    {
      question: "Are your products suitable for children?",
      answer: "Absolutely! Our combos are made with natural ingredients, making them a nutritious and delicious option for all age groups, including children."
    }
    

  ].map((faq, index) => (
    <details key={index} className="faq-item">
      <summary className="faq-question">
        
        <svg xmlns="http://www.w3.org/2000/svg"
          className="heroicon-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" style={{ marginRight: '8px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {faq.question}
      </summary>
      
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </details>
  ))}
</section>



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

export default NavMeal; 
  

