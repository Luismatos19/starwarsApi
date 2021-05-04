import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo-amarelo.png';

const Header = () => (
  <>
    <header className="header">
      <div className="logo">
        <Link className="app-menu__link" to="/">
          <img src={Logo} alt="Logo Star wars" />
        </Link>
      </div>
      <h1>Star Wars Enciplopedia</h1>
    </header>
  </>
);

export default Header;
