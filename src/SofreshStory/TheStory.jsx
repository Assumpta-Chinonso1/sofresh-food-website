import React from 'react'
import './TheStory.css'
import { assets } from '../assets/assests'
import Get from '../Get/Get'



const TheStory = () => {
  return (
    <div className='story'>

      {/* Our Story Section */}
      <div className='story-text'>
        <p>
          "OUR STORY Founded by Goke and Abimbola Balogun in 2010 as Fruitivegies Limited, 
          before the change of name to So Fresh in 2013. 
          So Fresh is Nigeria's pioneer and number one healthy food chain,
          providing fresh, delicious, nutrient-rich healthy meals and committed to promoting a healthy lifestyle.
          Over 10 years on, So Fresh has become the prime and preferred destination for people to make clean, safe,
          nutrient-rich & healthy food choices in Nigeria. FRESH IS BEST and that is how we win every day, 
          selling a wide range of fresh salads, juices, smoothies, parfait, 
          fiesta wraps, sandwich and other quick on-the-go healthy meals."
        </p>
      </div>

       


       <div className='story-svg'>
                 <div className="svg-wrapper">
                   <div className="svg-item">
                     <img src={assets.fifteen_m} alt="Meals sold icon" />
                     <h1>5 Million  +</h1>
                     <p>Meals Sold</p>
                 
                   </div>
               
           
                   <div className="svg-item">
                     <img src={assets.fifteen_plus} alt="Stores icon" />
                     <h1>15 +</h1>
                     <p>Stores opened across <br /> the country</p>
                   </div>
               
           
                   <div className="svg-item">
                     <img src={assets.onefifteen_s} alt="Customers icon" />
                     <h1>150,000 +</h1>
                     <p>Satisfied customers</p>
                   </div>
                   </div>
                   </div>

                   <div className="made">
  <div className="made-text">
    <h1>Healthy Food Made For <span>You</span></h1>
    <p>At So Fresh, we believe food should be fresh and close to nature as possible, 
      because the choices we make about what we eat, where it comes from and 
      how it's prepared have a direct and powerful impact on the health and wellbeing of individuals,
      communities and the environment. We understand that nations thrive and succeed on 
      the backdrop of an energetic and healthy populace, hence beyond food, 
      we will continue to be at the forefront of inspiring and motivating everyone to adopt a healthy lifestyle,
      in support of the achievement of the UN Sustainable Development Goals 2 and 3 in Nigeria.</p>
  </div>
  <img src={assets.made_for} alt="Made for you" className="made-img" />
</div>

           <div className="quest">
  <div className="quest-story-img">
    <img src={assets.quest} alt="Question bubble" />
    <span>
      We prioritize relationship, connection, engagement, and the well-being of our customers
    </span>
  </div>

  <div className="quest-text">
    <h1>THE <span>SO FRESH EXPERIENCE</span></h1>
    <p>
      The So Fresh Experience shall be defined by easy access to quality, fresh, healthy meals, 
      in a welcoming, cozy, and vibrant ambiance with a friendly, passionate, and caring team, 
      that offers delightfully memorable service.
    </p>
  </div>
</div>



   <div className="made">
  <div className="made-text">
    <h1>Our  <span>Mission</span></h1>
    <h3>Inspiring you to Live Fresh, Live Healthy</h3>
    <br />
    <p>We inspire people to live healthier and happier lives, by enriching them with fresh, wholesome, nutrient-rich and delicious meals. 
      Not only do we serve real food, fresh and healthy from nature, at the core of what we do is PEOPLE 
      <br />
      The people we empower people to: <br /> <br />

- Make healthy food choices and live healthier lifestyles.
<br />
- Realise their weight-loss and fitness goals.
<br />
- Improve their health conditions, overall wellbeing and self-esteem.
<br />
- Be economically independent.
<br />
<br />

For us it's all about the PEOPLE we empower daily through the value we create. Our fresh healthy food is just the medium.
We feel a sense of responsibility to change the future of food as we know it today and so, our underlying philosophy is 
to provide good, clean nutrition and healthy living and remain a customer-centric organization in order to create sustainable value for our community</p>
  </div>
  <img src={assets.mission} alt="Made for you" className="made-img" />
</div>



    <div className="vision">
  <img src={assets.vision} alt="Vision icon" />

  <div className="vision-text">
    <h1>Our <span>Vision</span></h1>
    <p>To be the prime destination for Healthy Lifestyle in Africa.</p>
  </div>
</div>

<div className="values">
  <h1>Our <span> Values</span></h1>
  <p>These five core values embody what we stand for, what drives us <br />
   and our way of doing things the right way. They keep us focused 
   <br />
    and help us make decisions about every aspect of our business</p>
    <div className="values-image">
      <img src={assets.values} alt="" />
    </div>
</div>

 <div className="space">
  <div className="space-text">
    <h1>Our  <span> Space</span></h1>
    <p>Our spaces stay true to what we believe in and stand for; open, inviting, warm and comfortable. We provide a serene, conducive and hygienic environment for people to have easy access to nutrient-rich, safe and healthy food choices.

Our open kitchens reflect our commitment to transparency and integrity because we want our guests to know exactly what goes into their food, where it came from and how we make it fresh.

Our walls are wood panelled, decorated with natural flowers and bear unique work of art, to celebrate human's connection to nature and beauty. Our spaces encourage community and fosters relationship.

We heartily welcome you into your fresh home, at every of our So Fresh outlet.
</p>
<button className="btn">Find Our Spaces</button>
  </div>
  <img src={assets.space} alt="Made for you" className="space-img" />
</div>

<div className ="quality">
  <div className="quality-container" >
   
   
    <div className="quality-text">
      <h2>
       Quality Statement
      </h2>
      <p>
      So Fresh is committed to providing the highest quality products <br />
       and  services always. Quality to us means ensuring freshness, <br />
        wholesomeness,hygiene, safety, tastiness, nutritive value,good <br />
        appearance and nice presentation of all products we offer.
      </p>

    
    </div>

   
  </div>

 
</div>
 

<div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
  <Get />
</div>



 </div>

  )
}

export default TheStory



