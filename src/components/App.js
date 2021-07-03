import React from 'react';
import './App.css';
import NavBar from './Navbar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {

  return (
    <div className='app'>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
