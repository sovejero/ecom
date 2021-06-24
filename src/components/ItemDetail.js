import './ItemDetail.css';

const ItemDetail = ({item}) => {

  return (
    <div className='item-detail'>
      <div>
        <img src={item.pictureUrl} alt=""></img>
      </div>
      <div className="item-detail-text">
        <p>ID: {item.id}</p>
        <h3>{item.title}</h3>
        <p>Descripcion: {item.description}</p>
        <p className="item-detail-price">Price: ${item.price}</p>
      </div>
    </div>
    );
}
  
export default ItemDetail;
