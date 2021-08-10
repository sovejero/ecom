import ItemList from '../ItemList/ItemList';
import {useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import {dataBase} from '../../firebase/firebase';

const ItemListContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState(false);

  useEffect(() => {
    const itemCollection = dataBase.collection('items');
    const query = id ? itemCollection.where("category", "==", id) : itemCollection;

    query.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log('No results!');
      }
      const items = querySnapshot.docs.map( doc => doc.data());
      setProducts(items);
    }).catch( error => console.log('Error searching items: ', error))
    .finally( () => {} )

  }, [id]);

  return (
    <Fragment>
        <ItemList items={products}></ItemList>
    </Fragment>
    );
}
  
export default ItemListContainer;
