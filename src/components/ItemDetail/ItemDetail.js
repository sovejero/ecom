import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setCount(quantity);
    addItem({item, quantity});
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
              <h3>{item.title}</h3>
              <p>Category: {item.category}</p>
              <p>Description: {item.description}</p>
              <p className="item-detail__price">Price: ${item.price}</p>
              {count===0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount> :
                <Link className={'item-detail__button'} to='/cart'>Finish shopping</Link>
              }
            </div>
          </div>
        </div> 
    );
}
  
export default ItemDetail;
