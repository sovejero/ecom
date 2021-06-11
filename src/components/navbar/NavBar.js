import './NavBar.css';
import CartWidget from './CartWidget.js';

const NavBar = () => {
  return (
    <header>
    <span className="header-logo"><a href="index">ECOM</a></span>
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="##">Item0</a></li>
        <li className="nav-item"><a href="##">Item1</a></li>
        <li className="nav-item"><a href="##">Item2</a></li>
        <li className="nav-item"><a href="##">Item3</a></li>
        <li className="nav-item"><CartWidget/></li>
      </ul>
    </nav>
    </header>
    );
}
  
export default NavBar;