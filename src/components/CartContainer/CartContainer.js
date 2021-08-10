import { useContext, Fragment, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../firebase/firebase';
import Cart from '../Cart/Cart';
import CartEmpty from '../CartEmpty/CartEmpty';
import CartForm from '../CartForm/CartForm';

const CartContainer = () => {
  const { isCartEmpty, getOrder, clear } = useContext(CartContext);
  const orders = dataBase.collection("orders");
  const emptyCart = isCartEmpty();
  const [orderId, setOrderId] = useState('');

  const addOrder = ({name, surname, phone, email}) => {
    const order = getOrder(name, surname, phone, email);

    orders.add(order).then(({id}) => {
      setOrderId(id);
    }).then( () => {
      clear();
    }).catch(error => console.log(error)
    )
  };

  return (
    emptyCart ? <CartEmpty orderId={orderId} ></CartEmpty> : 
    <Fragment>
      <Cart></Cart>
      <CartForm addOrder={addOrder}></CartForm>
    </Fragment>    
  );
}
  
export default CartContainer;
