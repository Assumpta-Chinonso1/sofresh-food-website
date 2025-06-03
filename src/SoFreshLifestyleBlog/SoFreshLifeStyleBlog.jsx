import React from 'react';
import './SoFreshLifeStyleBlog.css';
import { assets } from '../assets/assests';

const SoFreshLifeStyleBlog = () => {
  return (
    <div className='blog'>
      <div className="blog-image-wrapper">
        <img src={assets.behind_s} alt="So Fresh Blog Banner" />
      </div>

      <div className="blog-info">
        <div className="blog-title">SoFresh Lifestyle Blog</div>
        <h3 className="blog-published">
          Published On <span>21, April 2025</span>
        </h3>
      </div>

      <div className="blog-page">
        <h1>Behind the Scenes: How We Make Your Fresh, Healthy Meals</h1>
        <p>Ever wonder what happens behind the scenes before your meal arrives at your doorstep or is ready for pick-up?</p>
        <p>At <strong>So Fresh,</strong> we believe that every meal should not only taste delicious but also come with
          the peace of mind knowing it’s made with the highest quality, freshest ingredients and it's safe to consume.</p>
        <p>Our commitment to providing you with fresh, healthy, nutritious meals starts
          from the moment fresh produce arrives at our stores. We take extra care to ensure that every ingredient is <strong>clean, responsibly sourced,</strong> <strong>carefully handled</strong> and to 
          maintain its nutritional integrity. From sorting through fresh vegetables to washing, prepping, and packaging, we ensure that everything you receive is 
          of the highest standard.</p>
        <p>The process isn’t just about maintaining freshness, it’s about 
          preserving the 
          taste, nutrients, 
          and health benefits of every ingredient. After all, 
          the foundation of great food begins with great ingredients,
          and that’s exactly what you’ll experience every time you order from <strong>So Fresh</strong>.
          Our dedication to providing fresh meals extends to every aspect of our offerings, from our <strong>Meal Plans</strong>  
          and <strong>Detox Plans</strong> to our protein-packed  <strong>Parfaits, 
          Juices, Smoothies, Salads, Wraps, Warm Bowls and Beverages.</strong></p>
        <p>Each dish is designed to fuel your body and give you the nutrients you need to feel great throughout the day. 
          The love and care that goes into every meal is why  <strong>So Fresh</strong>  meals always taste fresh, delicious, and nourishing.</p>
        <p>Ever wondered how it all comes together? Want to see the magic unfold?
          We’ll be giving you an exclusive look at the <strong>So Fresh</strong> kitchen—follow us
          on <strong>Instagram</strong> (https://www.instagram.com/sofreshng/) and  <strong>X</strong> (Twitter - https://x.com/sofreshng) and <strong>TikTok</strong> (https://www.tiktok.com/@sofreshng_) 
          as we take you behind the scenes and show you the process that ensures every meal is crafted with love and care.</p>
        <p>Ready to enjoy fresh, nourishing meals every day? Start your health journey today by ordering your <strong>meal plan.</strong></p>
        <p><strong>ORDER NOW</strong><br />https://mealplan.sofreshng.com/</p>
      </div>
    </div>
  );
};

export default SoFreshLifeStyleBlog;







