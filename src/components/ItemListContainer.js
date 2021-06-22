import './ItemListContainer.css';
import ItemList from './ItemList';
import {useEffect, useState} from 'react';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsFetched = [
      {id: "IDimgx10230", title:"Title", price: 100, pictureUrl: "https://picsum.photos/200/?blur=4"},
      {id: "IDimgx10231", title:"Title2", price: 200, pictureUrl: "https://picsum.photos/200/?blur=4"}
    ];
    const getProducts = new Promise((resolve,reject) => {
      setTimeout( () => resolve(productsFetched), 2000);
    });
    getProducts.then(response => setProducts(response));
  }, []);

  return (
    <div className='content'>
        <p>{props.greeting}</p>
        <ItemList items={products}></ItemList>
    </div>
    );
}
  
export default ItemListContainer;
