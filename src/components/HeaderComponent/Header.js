import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

import './Header.css';


const Header = () => (
  <>
    <div className="header">
      <div className="logo">
        <a href="/">
          <IoHomeOutline className="button" />
        </a>

      </div>
      <h1 className="title">STAR WARS ENCYCLOPEDIA</h1>
    </div>
  </>
);

export default Header;
