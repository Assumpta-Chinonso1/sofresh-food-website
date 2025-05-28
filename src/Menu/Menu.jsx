import React, { useState } from 'react';
import './Menu.css';
import { Allcategories } from '../assets/assests';

const categories = [
  'All Categories',
  'Parfait Exotic',
  'Smoothies',
  'Greek Yoghurt',
  'Combo Meals',
  'Baskets & Platters',
  'Tigernut Drinks',
  'Zobo Drinks',
  'Wraps and Sandwich',
  'Juices',
  'Salads',
  'Parfait & Fruit Cups',
  'Warm Bowls'
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');

  // Filtering items based on the selected category
  const filterItems = activeCategory === 'All Categories'
    ? Allcategories
    : Allcategories.filter(item => item.category === activeCategory);

  return (
    <div className='menu'>
    
      <div className="category-menu">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Display Filtered Menu Items */}
      <div className="menu_itemss">
        {filterItems.map((item, index) => (
          <div className="menu_item" key={index}>
            <img src={item.menu_i} alt={item.menu_n} className="menu_i" />
            <h3 className="menu_n">{item.menu_n}</h3>
            <p className="menu_d">{item.menu_d}</p>
            <br />
            <span className="menu_amount">{item.menu_amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

