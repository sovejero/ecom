import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {dataBase} from '../../firebase/firebase';

const ItemListContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState(false);

  useEffect(() => {
    const itemCollection = dataBase.collection('items');

    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log('No results!');
      }
      const items = querySnapshot.docs.map( doc => doc.data());
      id ? setProducts(items.filter(item => item.category===id)) : setProducts(items);
      console.log(items);
    }).catch( error => console.log('Error searching items: ', error))
    .finally( () => console.log('Finally') );

  }, [id]);

  return (
    <>
        <ItemList items={products}></ItemList>
    </>
    );
}
  
export default ItemListContainer;
