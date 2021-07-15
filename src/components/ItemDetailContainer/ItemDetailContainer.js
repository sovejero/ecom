import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {dataBase} from '../../firebase/firebase';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const itemCollection = dataBase.collection('items');
    const item = itemCollection.doc(id);
    item.get().then((doc) => {
      if(!doc.exists) {
        console.log('Item does not exist!');
        return;
      }
      console.log('Item found!')
      setItem( doc.data() );
    }).catch( error => console.log('Error searching items: ', error))
    .finally( () => console.log('Finally') );

  },[id]);

  return (
        <ItemDetail item={item}></ItemDetail>
    );
}
  
export default ItemDetailContainer;
