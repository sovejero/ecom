import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd=()=>{}}) => {
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
        <div className='item-couter-input-box'>
          <button onClick={restOne}>-</button>
          <input type="number" value={count} readOnly></input>
          <button onClick={addOne}>+</button>
        </div>
        <button disabled={(stock)?false:true} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
    );
}
  
export default ItemCount;
