/*import { assets} from '../assets/assests';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext.jsx';
import { new_products } from '../assets/assests'; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext.jsx';
import { useLocation } from 'react-router-dom';



const Cart = () => {

   const { addToCart } = useContext(CartContext);
   const navigation = useNavigate();
   

    const { cartCount } = useCart();

    const location = useLocation();
    const currentPath = location.pathname;


  return (
    <div className="navmeal-container">
      
      <nav className='navsss'>
        <h4>GET  12.5%  DISCOUNTS  ON  FOUR  WEEKS  MEAL  PLAN</h4>
      </nav>

    
      <header className="navmeal-header">
        <Link to='/'><img src={assets.sofresh_logo} alt="So Fresh Logo" className="navmeal-logo" /></Link>
        <nav className="navmeal-nav">
          <ul>
            <li><a href="#detox">Detox Plan</a></li>
            <li><a href="#immunity">Immunity Combos</a></li>
            <li><a href="#mealplan">Meal Plan</a></li>
          </ul>
        </nav>
        <div className="navmeal-cart">
          <Link to='/cart'><img src={assets.cartt} alt="" className='cart' />
       
         <span className="cart-count-badge">{cartCount}</span>
          </Link>
        </div>

      </header>

      <hr />

    
      <ul className="carrt">
  <li className={`cart-nav ${currentPath === '/cart' ? 'active' : ''}`}>
    <Link to="/add">
      Shopping Cart <ChevronRightIcon className="icon" />
    </Link>
  </li>

  <li className={`cart-nav ${currentPath === '/Checkout' ? 'active' : ''}`}>
    <Link to="/Checkout">
      Checkout Details <ChevronRightIcon className="icon" />
    </Link>
  </li>

  <li className={`cart-nav ${currentPath === '/complete' ? 'active' : ''}`}>
    <Link to="/complete">
      Order Complete
    </Link>
  </li>
</ul>

    
      <div className="cart-content">
    
          <div className="empty-cart">
            <img src={assets.empty_cart} alt="Empty Cart" className="empty-cart-icon" />
      
            <h2>Your cart is currently empty!</h2>
            <Link to="/store" className="browse-store">Browse store</Link>
     
            <h3 className="new-in-store-title">New in store</h3>
           </div>
    </div>

                    <section className='checks'>

           {new_products.map(product => (
          <div key={product.id} className="navmeal-productss">
            <img src={product.image} alt={product.name} />
            <p className='name'>{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
            <button className="btnss" onClick={()=> {
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
        <h3 className='h3'>Copyright 2025 <span>© So Fresh Neigbourhood Market </span> </h3>
      </footer>
    </div>
  );
};
export default Cart;*/


