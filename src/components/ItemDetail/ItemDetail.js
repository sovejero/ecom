import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {

  return (
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
        <ItemCount></ItemCount>
      </div>
    </div>
    );
}
  
export default ItemDetail;
