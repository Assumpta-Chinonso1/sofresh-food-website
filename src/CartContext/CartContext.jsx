 {/*import React, {Children, createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => { 

    const [cartItems, setCartItems] = useState([]);


    const addToCart = (product) => {
              const isAlreadyInCart = cartItems.find(item => item.id === product.id);
              if(isAlreadyInCart) {
                setCartItems(cartItems.map(item =>
                    item.id === product.id ? {
                        ...item, quantity: item.quantity + 1
                    } : item
        
                ));
                
              } else {
                setCartItems ([...cartItems, {...product, quantity:1}])
              }
    };

     const removeFromCart = (id) => {
       setCartItems(cartItems.filter(item => item.id !== id));
     };

     return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
     )
}*/}


import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.find(item => item.id === product.id);
    if (isAlreadyInCart) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Here is the custom hook
export const useCart = () => useContext(CartContext);
