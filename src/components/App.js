import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  const greeting = "Bienvenido!";

  return (
    <div className='app'>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </div>

  );
}

export default App;