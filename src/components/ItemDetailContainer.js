import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import {useEffect, useState} from 'react';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const itemFetched = {
      id: "IDimgx10234",
      title:"TitleDetail",
      description: "Short article description, including something",
      price: 150,
      pictureUrl: "https://picsum.photos/200/?blur=4"
    };

    const getItem = async () => { 
      const response = await new Promise((resolve,reject) => {
        setTimeout( () => resolve(itemFetched), 2000);
      });
      setItem(response);
    };
    getItem();
  },[]);

  return (
    <div className='content-detail'>
        <ItemDetail item={item}></ItemDetail>
    </div>
    );
}
  
export default ItemDetailContainer;
