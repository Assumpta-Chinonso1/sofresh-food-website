
import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';

import './Cart.css';

const Cart = () => {
  const { addToCart } = useContext(CartContext);
  const { cartCount } = useCart();
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { cartItems,  removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(CartContext);


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
     
           <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
           <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
                </div>



        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <Link to="/cart">
            <img src={assets.cartt} alt="" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </Link>
        </div>
        </header>

{isMenuOpen && (
  <div className="fullscreen-nav">
    <div className="close-icon">
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
    </div>

    {/* Main nav links *
    <ul>
      <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
      <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
      <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
    </ul>
    <ul className="mobile-cart-nav">
  {currentPath === '/add' && (
    <li className="cart-nav active">
      <Link to="/add">
        Shopping Cart <ChevronRightIcon className="icon" />
      </Link>
    </li>
  )}

  {currentPath === '/Checkout' && (
    <li className="cart-nav active">
      <Link to="/Checkout">
        Checkout Details <ChevronRightIcon className="icon" />
      </Link>
    </li>
  )}

  {currentPath === '/complete' && (
    <li className="cart-nav active">
      <Link to="/complete">Order Complete</Link>
    </li>
  )}
</ul>

  </div>
)}

      {/*<div className="cart-content">
        <div className="empty-cart">
          <img src={assets.empty_cart} alt="Empty Cart" className="empty-cart-icon" />
          <h2>Your cart is currently empty!</h2>
          <Link to="/store" className="browse-store">Browse store</Link>
          <h3 className="new-in-store-title">New in store</h3>
        </div>
      </div>*

      <div className="cart-content">
  {cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src={assets.empty_cart} alt="Empty Cart" className="empty-cart-icon" />
      <h2>Your cart is currently empty!</h2>
      <Link to="/store" className="browse-store">Browse store</Link>
      <h3 className="new-in-store-title">New in store</h3>
    </div>
  ) : (
    <div className="filled-cart">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">₦{(item.price * item.quantity).toLocaleString()}</p>
            <p className="cart-item-qty">Qty: {item.quantity}</p>
          </div>
          <div className="cart-buttons">
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <button onClick={() => addToCart(item)}>+</button>
            <button className="cart-remove-btn" onClick={() => deleteFromCart(item.id)}>
              Cancel
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ₦{getTotalCartAmount().toLocaleString()}</h3>
        <Link to="/Checkout" className="checkout-btn">Proceed to Checkout</Link>
      </div>
    </div>
  )}
</div>


      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product)
              navigation('/add')
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;


/*import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';

import './Cart.css';

const Cart = () => {
  const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(CartContext);
  const { cartCount } = useCart();
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartVisible, setMiniCartVisible] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>

        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <div className="cart-icon-wrapper" onClick={() => setMiniCartVisible(!miniCartVisible)}>
            <img src={assets.cartt} alt="" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </div>

          {miniCartVisible && cartItems.length > 0 && (
            <div className="mini-cart-dropdown">
              <div className="mini-cart-header">
                <img src={cartItems[0].image} alt={cartItems[0].name} className="mini-cart-img" />
                <div className="mini-cart-details">
                  <p className="mini-cart-name">{cartItems[0].name}</p>
                  <p>{cartItems[0].quantity} × ₦{cartItems[0].price.toLocaleString()}</p>
                </div>
                <button onClick={() => setMiniCartVisible(false)} className="close-mini-cart">×</button>
              </div>

              <div className="mini-cart-subtotal">
                <strong>Subtotal:</strong> ₦{getTotalCartAmount().toLocaleString()}
              </div>

              <div className="mini-cart-buttons">
                <Link to="/add" className="view-cart-btn" onClick={() => setMiniCartVisible(false)}>VIEW CART</Link>
                <Link to="/Checkout" className="checkout-btn" onClick={() => setMiniCartVisible(false)}>CHECKOUT</Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="fullscreen-nav">
          <div className="close-icon">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>

          <ul>
            <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
            <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
            <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
          </ul>

          <ul className="mobile-cart-nav">
            {currentPath === '/add' && (
              <li className="cart-nav active">
                <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/Checkout' && (
              <li className="cart-nav active">
                <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/complete' && (
              <li className="cart-nav active">
                <Link to="/complete">Order Complete</Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product);
              navigation('/add');
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;


import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';
import './Cart.css';

const Cart = () => {
  const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(CartContext);
  const { cartCount } = useCart();
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartVisible, setMiniCartVisible] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>

        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <div className="cart-icon-wrapper" onClick={() => setMiniCartVisible(!miniCartVisible)}>
            <img src={assets.cartt} alt="Cart" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </div>

          {miniCartVisible && (
            <div className="mini-cart-dropdown">
              <button onClick={() => setMiniCartVisible(false)} className="close-mini-cart">×</button>

              {cartItems.length === 0 ? (
                <div className="mini-cart-empty">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="mini-cart-items">
                  {cartItems.map((item) => (
                    <div className="mini-cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} className="mini-cart-img" />
                      <div className="mini-cart-details">
                        <p className="mini-cart-name">{item.name}</p>
                        <p>{item.quantity} × ₦{item.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="remove-mini-item"
                      >
                        ❌
                      </button>
                    </div>
                  ))}

                  <div className="mini-cart-subtotal">
                    <strong>Subtotal:</strong> ₦{getTotalCartAmount().toLocaleString()}
                  </div>

                  <div className="mini-cart-buttons">
                    <Link to="/add" className="view-cart-btn" onClick={() => setMiniCartVisible(false)}>
                      VIEW CART
                    </Link>
                    <Link to="/Checkout" className="checkout-btn" onClick={() => setMiniCartVisible(false)}>
                      CHECKOUT
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="fullscreen-nav">
          <div className="close-icon">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>

          <ul>
            <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
            <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
            <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
          </ul>

          <ul className="mobile-cart-nav">
            {currentPath === '/add' && (
              <li className="cart-nav active">
                <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/Checkout' && (
              <li className="cart-nav active">
                <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/complete' && (
              <li className="cart-nav active">
                <Link to="/complete">Order Complete</Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product);
              navigation('/add');
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;


import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';
import './Cart.css';

const Cart = () => {
  const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(CartContext);
  const { cartCount } = useCart();
  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartVisible, setMiniCartVisible] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>

        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <div className="cart-icon-wrapper" onClick={() => setMiniCartVisible(!miniCartVisible)}>
            <img src={assets.cartt} alt="Cart" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>
          </div>

          {miniCartVisible && (
            <div className="mini-cart-dropdown">
              <button onClick={() => setMiniCartVisible(false)} className="close-mini-cart">×</button>

              {cartItems.length === 0 ? (
                <div className="mini-cart-empty">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="mini-cart-items">
                  {cartItems.map((item) => (
                    <div className="mini-cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} className="mini-cart-img" />
                      <div className="mini-cart-details">
                        <p className="mini-cart-name">{item.name}</p>
                        <p>{item.quantity} × ₦{item.price.toLocaleString()}</p>
                        <div className="mini-cart-quantity-controls">
                          <button onClick={() => removeFromCart(item.id)} className="qty-btn">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="qty-btn">+</button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="remove-mini-item"
                      >
                        ❌
                      </button>
                    </div>
                  ))}

                  <div className="mini-cart-subtotal">
                    <strong>Subtotal:</strong> ₦{getTotalCartAmount().toLocaleString()}
                  </div>

                  <div className="mini-cart-buttons">
                    <Link to="/add" className="view-cart-btn" onClick={() => setMiniCartVisible(false)}>
                      VIEW CART
                    </Link>
                    <Link to="/Checkout" className="checkout-btn" onClick={() => setMiniCartVisible(false)}>
                      CHECKOUT
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="fullscreen-nav">
          <div className="close-icon">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>

          <ul>
            <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
            <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
            <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
          </ul>

          <ul className="mobile-cart-nav">
            {currentPath === '/add' && (
              <li className="cart-nav active">
                <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/Checkout' && (
              <li className="cart-nav active">
                <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/complete' && (
              <li className="cart-nav active">
                <Link to="/complete">Order Complete</Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product);
              navigation('/add');
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;*/


/*import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { CartContext, useCart } from '../CartContext/CartContext.jsx';
import { Sling as Hamburger } from 'hamburger-react';
import './Cart.css';

const Cart = () => {
 // const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(CartContext);
 // const { cartCount } = useCart();
 const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount, cartCount } = useCart();

  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartVisible, setMiniCartVisible] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>

        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <div
            className="cart-icon-wrapper"
            onMouseEnter={() => setMiniCartVisible(true)}
            onMouseLeave={() => setMiniCartVisible(false)}
          >
            <img src={assets.cartt} alt="Cart" className="cart" />
            <span className="cart-count-badge">{cartCount}</span>

            <div className="mini-cart-dropdown">
              {cartItems.length === 0 ? (
                <div className="mini-cart-empty">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="mini-cart-items">
                  {cartItems.map((item) => (
                    <div className="mini-cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} className="mini-cart-img" />
                      <div className="mini-cart-details">
                        <p className="mini-cart-name">{item.name}</p>
                        <p>{item.quantity} × ₦{item.price.toLocaleString()}</p>
                        <div className="mini-cart-quantity-controls">
                          <button onClick={() => removeFromCart(item.id)} className="qty-btn">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="qty-btn">+</button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="remove-mini-item"
                      >
                        ❌
                      </button>
                    </div>
                  ))}

                  <div className="mini-cart-subtotal">
                    <strong>Subtotal:</strong> ₦{getTotalCartAmount().toLocaleString()}
                  </div>

                  <div className="mini-cart-buttons">
                    <Link to="/add" className="view-cart-btn">
                      VIEW CART
                    </Link>
                    <Link to="/Checkout" className="checkout-btn">
                      CHECKOUT
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fullscreen-nav">
          <div className="close-icon">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>

          <ul>
            <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
            <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
            <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
          </ul>

          <ul className="mobile-cart-nav">
            {currentPath === '/add' && (
              <li className="cart-nav active">
                <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/Checkout' && (
              <li className="cart-nav active">
                <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/complete' && (
              <li className="cart-nav active">
                <Link to="/complete">Order Complete</Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <section className='checks'>
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product);
              navigation('/add');
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;*/

import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { assets, new_products } from '../assets/assests';
import { useCart } from '../CartContext/CartContext';
import { Sling as Hamburger } from 'hamburger-react';
import './Cart.css';

const Cart = () => {
  const { addToCart, cartItems, removeFromCart, deleteFromCart, getTotalCartAmount, cartCount } = useCart();

  const navigation = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartVisible, setMiniCartVisible] = useState(false);

  return (
    <div className="navmeal-container">
      <nav className="navsss">
        <h4>GET 12.5% DISCOUNTS ON FOUR WEEKS MEAL PLAN</h4>
      </nav>

      <header className="navmeal-header">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>

        <Link to="/" className="navmeal-logo-link">
          <img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" />
        </Link>

        <div className="navmeal-cart">
          <div
            className="cart-icon-wrapper"
            onMouseEnter={() => setMiniCartVisible(true)}
            onMouseLeave={() => setMiniCartVisible(false)}
          >
            <img src={assets.cartt} alt="Cart" className="cart" />
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}

            {miniCartVisible && (
              <div className="mini-cart-dropdown">
                {cartItems.length === 0 ? (
                  <div className="mini-cart-empty">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="mini-cart-items">
                    {cartItems.map((item) => (
                      <div className="mini-cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="mini-cart-img" />
                        <div className="mini-cart-details">
                          <p className="mini-cart-name">{item.name}</p>
                          <p>{item.quantity} × ₦{item.price.toLocaleString()}</p>
                          <div className="mini-cart-quantity-controls">
                            <button onClick={() => removeFromCart(item.id)} className="qty-btn">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => addToCart(item)} className="qty-btn">+</button>
                          </div>
                        </div>
                        <button onClick={() => deleteFromCart(item.id)} className="remove-mini-item">❌</button>
                      </div>
                    ))}

                    <div className="mini-cart-subtotal">
                      <strong>Subtotal:</strong> ₦{getTotalCartAmount().toLocaleString()}
                    </div>

                    <div className="mini-cart-buttons">
                      <Link to="/add" className="view-cart-btn">VIEW CART</Link>
                      <Link to="/Checkout" className="checkout-btn">CHECKOUT</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fullscreen-nav">
          <div className="close-icon">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>
          <ul>
            <li><a href="#detox" onClick={() => setIsMenuOpen(false)}>Detox Plan</a></li>
            <li><a href="#immunity" onClick={() => setIsMenuOpen(false)}>Immunity Combos</a></li>
            <li><a href="#mealplan" onClick={() => setIsMenuOpen(false)}>Meal Plan</a></li>
          </ul>
          <ul className="mobile-cart-nav">
            {currentPath === '/add' && (
              <li className="cart-nav active">
                <Link to="/add">Shopping Cart <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/Checkout' && (
              <li className="cart-nav active">
                <Link to="/Checkout">Checkout Details <ChevronRightIcon className="icon" /></Link>
              </li>
            )}
            {currentPath === '/complete' && (
              <li className="cart-nav active">
                <Link to="/complete">Order Complete</Link>
              </li>
            )}
          </ul>
        </div>
      )}

      <section className="checks">
        {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className="name">{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={() => {
              addToCart(product);
              navigation('/add');
            }}>ADD TO CART</button>
          </div>
        ))}
      </section>

      <a href="https://wa.me/2348133124741" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="Chat on WhatsApp" />
      </a>

      <footer className="navFoot">
        <div className="navmea">
          <img src={assets.visa_c} alt="" />
          <img src={assets.master_c} alt="" />
          <img src={assets.bank_t} alt="" />
          <img src={assets.pal_pay} alt="" />
        </div>
        <h3 className="h3">Copyright 2025 <span>© So Fresh Neigbourhood Market</span></h3>
      </footer>
    </div>
  );
};

export default Cart;






