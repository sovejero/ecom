import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Loader from '../Loader/Loader';

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const onAdd = (quantity) => {
    setCount(quantity);
  }

  const finishPurchase = () => {
    history.push("/cart");
  }

  return (
      !item ? <Loader/> :
        <div className='container content-detail'>
          <div className='item-detail'>
            <div>
              <img src={item.pictureUrl} alt=""></img>
            </div>              
            <div className="item-detail__text">
              <p>ID: {item.id}</p>
              <p>Category: {item.category}</p>
              <h3>{item.title}</h3>
              <p>Descripcion: {item.description}</p>
              <p className="item-detail__price">Price: ${item.price}</p>
              {!count && <ItemCount stock={8} initial={1} onAdd={onAdd}></ItemCount>}
              {!!count && <button onClick={finishPurchase}>Terminar mi compra</button>}
            </div>
          </div>
        </div> 
    );
}
  
export default ItemDetail;
