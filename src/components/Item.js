import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

  return (
    <Link className='item__link' to={`/item/${item.id}`}>
      <div id={item.id} className='item'>
        <img className='item__img' src={item.pictureUrl} alt=""></img>
        <h3>{item.title}</h3>
        <p>Category: {item.category}</p>
        <p>Precio: ${item.price}</p>
      </div>
    </Link>
    );
}
  
export default Item;
