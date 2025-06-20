import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import './Latest.css'
import  {menu_more } from '../assets/assests'
import { useNavigate } from 'react-router-dom'



const Latest = () => {
  const navigate = useNavigate();
  const handleReadMore = (path) => {
    navigate(path);
     window.scrollTo(0, 0);
    
  }
 
  return (
    <div className='latest'>
        <br /><br /><br />
      <div className="exploremenu-top">
        <h1>
          Latest  <span className="menu-gradient">News</span>
        </h1>
           <span className="menu-label">
           <span className="menu-text">Read More</span>
             <ArrowRightIcon className="menu-arrow" />
            </span>

      </div>
     

        <div className="latest-container">
           {menu_more.map((item, index)=> (
             <div key={index} className="latest-card">
               <img src={item.menu_image}  alt = {item.menu_name} /> 
    
               <h3>{item.menu_name}</h3>
                <p>{item.menu_des}</p>
             <div className="date-btn-wrapper">
           <p className="date">{item.menu_date}</p>
                <button onClick={() => handleReadMore (item.link)} className="read-more-btn"  >
            Read More <ArrowRightIcon className='arrow-btn'  />
              </button>
             
                    </div>
             </div>
           ))}

            </div>
     </div>
  )
}

export default Latest