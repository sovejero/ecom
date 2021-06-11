import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <div className='content'>
        <p>{props.greeting}</p>
    </div>
    );
}
  
export default ItemListContainer;