import React from 'react';
import './Order.css';
import { XCircleIcon } from '@heroicons/react/24/solid';

const Order = ({ onClose }) => {
  const handlePickupClick = () => {
    
    const phoneNumber = '+2348133124741'; 
    const message = 'Hello So Fresh, I want to place an order for pickup';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <XCircleIcon className="icon-x" />
        </button>
        <h3>Select Delivery Type</h3>

        <div className="options">
          <button className="option-btn chowdeck">Chowdeck</button>
          <button className="option-btn glovo">Glovo</button>
          <button className="option-btn pickup" onClick={handlePickupClick}>
            Pick Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;


