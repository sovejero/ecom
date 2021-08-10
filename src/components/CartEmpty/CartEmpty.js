import { Link } from "react-router-dom";
import './CartEmpty.css';

const CartEmpty = ({orderId}) => {
  return (
    <div className="container container--margin container--center">
      <div className={orderId!=='' ? "order-commpleted" : "order--hidden"}>Order successful! Your order ID is: {orderId}</div>
      <Link className='cart-item__button' to='/'>No items in cart! Click to return Home</Link>
    </div>
  );
}
  
export default CartEmpty;
