import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeItem, getTotal, clear } = useContext(CartContext);
  const total = getTotal();

  return (
    <div className="container container--margin">
      <div className="cart-grid">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price each</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      {cartItems.map( (cartItem) => {
          return  (
            <div key={cartItem.item.id} className='cart-grid'>
                <div className='flex'>
                  <img className='cart-item__img' src={cartItem.item.pictureUrl} alt=""></img>
                  <div className="flex flex--direction">
                    <p className="cart-item__product">Title: {cartItem.item.title}</p>
                    <p className="cart-item__product">Category: {cartItem.item.category}</p>
                    <p className="cart-item__product">Description: {cartItem.item.description}</p>
                  </div>
                </div>
                <p>{cartItem.quantity}</p>
                <p>${cartItem.item.price}</p>
                <p className='cart-item__total'>${cartItem.item.price*cartItem.quantity}</p>
                <div className='cart-item__remove--wrapper'>
                  <span onClick={() => removeItem(cartItem.item.id)} className="material-icons cart-item__remove">delete</span>
                </div>
            </div>
            );}
          )
      }

      <div className='cart-order'>
        <p>Total: ${total}</p>
      </div>
      <div className='cart-order'>
        <button onClick={clear}>Remove all Items</button>
      </div>
      
    </div>
  );
}
  
export default Cart;
