import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


function App() {
  const greeting = "";

  return (
    <div className='app'>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
