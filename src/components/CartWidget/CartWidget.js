import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();
  return (
    totalQuantity > 0 ? <i>{totalQuantity}</i> : null
    );
}

export default CartWidget;
