import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

  return (
    <div className='content'>
        <p>{props.greeting}</p>
        <ItemCount stock={5} initial={1}></ItemCount>
    </div>
    );
}
  
export default ItemListContainer;