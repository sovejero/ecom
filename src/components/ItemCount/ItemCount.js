import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial=1, onAdd=()=>{}}) => {
  const [count, setCount] = useState(initial);

  const restOne = () => {
    if(count>1){
      setCount(prevCount => prevCount-1);
    };
  };

  const addOne = () => {
    if (count<stock){
      setCount(prevCount => prevCount+1);
    };
  };

  return (
    <div className='item-counter'>
        <div>
          <button className="item-counter__button" onClick={restOne}>-</button>
          <input className="item-counter__input" type="number" value={count} readOnly></input>
          <button className="item-counter__button" onClick={addOne}>+</button>
        </div>
        <button disabled={!stock} onClick={() => onAdd(count)}>Add to cart</button>
    </div>
    );
}
  
export default ItemCount;
