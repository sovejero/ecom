import './Cart.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../firebase/firebase';

const Cart = () => {
  const { cartItems, removeItem, getTotal, getOrder } = useContext(CartContext);
  const total = getTotal();
  const orders = dataBase.collection("orders");
  
  const addOrder = () => {
    const order= getOrder();
    orders.add(order).then(({id}) => {
      alert(id);
      console.log("success");
    }).catch(error => console.log(error)
    ).finally(() => console.log("finally"))
  };

  return (
    <div className="container container--margin">
      <div className="cart-grid">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price each</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      {cartItems.length===0 ? <Link className='cart-item__button' to='/'>No items in cart, return Home</Link> :
        cartItems.map( (cartItem) => {
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
        <label>
          Nombre: <input type="text"/>
        </label>
        <label>
          Telefono: <input type="text"/>
        </label>
        <label>
          Email: <input type="text"/>
        </label>
        <button onClick={addOrder}>Finalizar compra</button>
      </div>
    </div>
  );
}
  
export default Cart;
