import { useContext, Fragment } from 'react';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../firebase/firebase';
import Cart from '../Cart/Cart';
import CartEmpty from '../CartEmpty/CartEmpty';
import CartForm from '../CartForm/CartForm';

const CartContainer = () => {
  const { cartItems, getOrder } = useContext(CartContext);
  const orders = dataBase.collection("orders");
  
  const addOrder = (e) => {
    e.preventDefault();

    const order= getOrder();
    orders.add(order).then(({id}) => {
      alert(id);
      console.log("success");
    }).catch(error => console.log(error)
    ).finally(() => console.log("finally"))
  };

  return (
    cartItems.length===0 ? <CartEmpty></CartEmpty> : 
    <Fragment>
      <Cart></Cart>
      <CartForm addOrder={addOrder}></CartForm>
    </Fragment>    
  );
}
  
export default CartContainer;
