import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const productsFetched = [
  {id: "01", category:"arabica", title:"Title", description: "Short description", price: 100, pictureUrl: "https://picsum.photos/200/?blur=4"},
  {id: "02", category:"arabica", title:"Title2", description: "Short description", price: 200, pictureUrl: "https://picsum.photos/200/?blur=4"},
  {id: "03", category:"robusta", title:"Title3", description: "Short description", price: 300, pictureUrl: "https://picsum.photos/200/?blur=4"},
  {id: "04", category:"liberica", title:"Title4", description: "Short description", price: 400, pictureUrl: "https://picsum.photos/200/?blur=4"},
  {id: "05", category:"blends", title:"Title5", description: "Short description", price: 500, pictureUrl: "https://picsum.photos/200/?blur=4"}
];

const ItemDetailContainer = () => {
  const [item, setItem] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const getItem = async () => { 
      const response = await new Promise((resolve,reject) => {
        setTimeout( () => resolve(productsFetched), 1000);
      });
      const item = await response.filter( items => items.id === id);

      setItem(...item);
    };
    getItem();
  },[id]);

  return (
        <ItemDetail item={item}></ItemDetail>
    );
}
  
export default ItemDetailContainer;
