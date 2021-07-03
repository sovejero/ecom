import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Loader from '../Loader/Loader';

const ItemDetail = ({item}) => {

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
            <ItemCount></ItemCount>
          </div>
        </div>
      </div>
    );
}
  
export default ItemDetail;
