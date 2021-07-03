import './ItemList.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';

const ItemList = ({items}) => {

  return (
    !items ? <Loader/> :
      <div className='container__item-list container'>  
        {items.map(item => <Item key={item.id} item={item}></Item>)}
      </div>
    );
}
  
export default ItemList;
