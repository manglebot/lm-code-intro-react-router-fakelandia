import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink to="/misdemeanour">Misdemeanour</NavLink>
      </li>
      <li className="header__nav-item">
        <NavLink to="/confession">Confession</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
