import './ItemList.css';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <div className='item-list'>
        {items.map((item, i) => <Item key={i} item={item}></Item>)}
    </div>
    );
}
  
export default ItemList;
