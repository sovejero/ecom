import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import logo from './coffee-brown.svg';

const NavBar = () => {
  const categories = ['arabica', 'robusta', 'liberica', 'blends'];

  return (
    <header>
      <div className="container header__wrapper">
        <Link className="nav__link" to='/'>
          <img className="logo" src={logo} alt=""></img>
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            {categories.map( category => 
              <li key={category} className="nav__item">
                <NavLink activeClassName="nav__link--active" className="nav__link nav__link--capitalize" to={`/category/${category}`}>
                  {category}
                </NavLink>
              </li>
              )
            }
          </ul>
          <ul className="nav__list">
            <li className="nav__item"><a className="nav__link" href="##">LogIn</a></li>
            <li className="nav__item"><CartWidget/></li>
          </ul>
        </nav>
      </div>
    </header>
    );
}
  
export default NavBar;
