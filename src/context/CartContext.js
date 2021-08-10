import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isCartEmpty = () => {
    return cartItems.length===0;
  }

  const isInCart = (itemId) => {
    return cartItems.filter(cartItem => cartItem.item.id === itemId).length > 0;
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
    
  const getTotalQuantity = () => {
    if (cartItems.length > 0) {
      return cartItems.reduce((acc, cartItem) => { return acc + cartItem.quantity;}, 0);
    } else {
      return 0;
    }
  };

  const getTotal = () => {
    if (cartItems.length > 0) {
      return cartItems.reduce((acc, cartItem) => { return acc + (cartItem.quantity * cartItem.item.price);}, 0);
    } else {
      return 0;
    }
  }

  const getOrder = (name, surname, phone, email) => {
    const items = cartItems.map( ({item, quantity}) => (
      { id: item.id, title: item.title, price: item.price, quantity: quantity }
      ));
    const total = getTotal();
    const date = '';

    return {
      buyer: {
        name: `${name} ${surname}`,
        phone: phone,
        email: email,
      },
      items,
      date,
      total,
    }
  }

  return(
    <CartContext.Provider value={{addItem, removeItem, getTotalQuantity, getTotal, getOrder, clear, isCartEmpty, cartItems}}>
      {children}
    </CartContext.Provider>
  )
}
