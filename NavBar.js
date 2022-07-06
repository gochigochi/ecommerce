import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/some-page">Some Other Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
