import { Link } from "react-router-dom";
import './CartEmpty.css';

const CartEmpty = () => {
  return (
    <div className="container container--margin container--center">
      <Link className='cart-item__button' to='/'>No items in cart! Click to return Home</Link>
    </div>
  );
}
  
export default CartEmpty;
