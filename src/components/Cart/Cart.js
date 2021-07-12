import './Cart.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeItem, getTotal } = useContext(CartContext);
  const total = getTotal();

  return (
    <div className="container container__item-list">
      {cartItems.length===0 ? <Link className='cart-item__button' to='/'>No items in cart, return Home</Link> :
        cartItems.map( (cartItem) => {
          return  (
            <div key={cartItem.item.id} className='cart-item'>
                <img className='cart-item__img' src={cartItem.item.pictureUrl} alt=""></img>
                <div className='cart-item__description'>
                  <h3>{cartItem.item.title}</h3>
                  <p>{cartItem.item.category}</p>
                  <p>{cartItem.quantity} x ${cartItem.item.price}</p>
                </div>
              <div className='cart-item__end'>
                <p className='cart-item__total'>${cartItem.item.price*cartItem.quantity}</p>
                <div className='cart-item__remove--wrapper'>
                  <span onClick={() => removeItem(cartItem.item.id)} className="material-icons cart-item__remove">delete</span>
                </div>
              </div>
            </div>
            );}
          )
      }
      <div className='cart-order'>
        <p>Total: ${total}</p>
      </div>

    </div>
  );
}
  
export default Cart;
