import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <>
        {items.map(item => <Item key={item.id} item={item}></Item>)}
    </>
    );
}
  
export default ItemList;