import React, { useState } from 'react';
import { assets, menu_locations } from '../assets/assests';
import './Location.css';

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(menu_locations[0]);

  return (
    <div className="location-page">
      {/* Left Section */}
      <div className="location-left">
        <div className="search-container">
  <form className="search-form">
  <button type="submit" className="search-button">
    <span>Search stores</span>
    <img src={assets.search_icon} alt="Search Icon" className="search-icon" />
      <p className="store-count"> Find {menu_locations.length}  stores</p>
  </button>
</form>
</div>
 


        <div className="location-cards-container">
          {menu_locations.map((item, index) => (
            <div
              key={index}
              className={`location-card ${
                selectedLocation.menuLoca_namee === item.menuLoca_namee ? 'active' : ''
              }`}
              onClick={() => setSelectedLocation(item)}
            >
              <img
                src={item.menuLoc_pix}
                alt={item.menuLoca_namee}
                className="location-image"
              />
              <div className="location-info">
                <h2>{item.menuLoca_namee}</h2>
                <p>{item.menuLoc_destination}</p>
                <p>{item.menuLoc_del}</p>
                <span>{item.menuLoc_number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Map */}
      <div className="location-right">
        <iframe
          src={selectedLocation.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;



