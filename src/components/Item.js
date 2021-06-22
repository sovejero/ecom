import './Item.css';

const Item = ({item}) => {

  return (
    <div className='item'>
        <img src={item.pictureUrl} alt=""></img>
        <p>ID: {item.id}</p>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
    </div>
    );
}
  
export default Item;
