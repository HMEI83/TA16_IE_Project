import React, { useState } from 'react';
import { Button1 } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          LOGO
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Life in AU <i className='fas fa-caret-down' />
            </span>
            
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/learning'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Learn English
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/entertainments'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Social Entertainments
            </Link>
          </li>
        </ul>
        <Button1 />
      </nav>
    </>
  );
}

export default Navbar;
