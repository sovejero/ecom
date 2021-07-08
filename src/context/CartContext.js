import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const isInCart = (itemId) => {
    if (cartItems === []) {
        return false;
    }
    else {
      return cartItems.filter(cartItem => cartItem.item.id === itemId).length > 0;
    }
  }

  const addItem = (cartItem) => {
    const cartItemId = cartItem.item.id;
    const cartItemQuantity = cartItem.quantity;
    
    if (isInCart(cartItemId)) {
      const newItem = cartItems.map( (item) =>  {
        if(item.item.id === cartItemId) {
          const sum = item.quantity + cartItemQuantity;
          return {item: item.item, quantity: sum};
        }
        return item;
      });
      setCartItems(newItem);
    }
    else {
      setCartItems([...cartItems, cartItem]);
    }
  }

  const removeItem = (itemId) => {
    const filteredCartItem = cartItems.filter( cartItem => cartItem.item.id !== itemId);
    setCartItems(filteredCartItem);
  }
    
  const clear = () => {
    setCartItems([]);
  };
    
    

  return(
    <CartContext.Provider value={addItem}>
      {children}
    </CartContext.Provider>
  )
}
