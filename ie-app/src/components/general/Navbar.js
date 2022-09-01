import React, { useState } from "react";
import { Button1 } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Dropdown1, Dropdown2, Dropdown3 } from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          VICISH
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <span className="nav-links" onClick={closeMobileMenu}>
              Life in AU <i className="fas fa-caret-down" />
            </span>

            {dropdown1 && <Dropdown1 />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <span className="nav-links" onClick={closeMobileMenu}>
            Learning language <i className="fas fa-caret-down" />
            </span>

            {dropdown3 && <Dropdown3 />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <span className="nav-links" onClick={closeMobileMenu}>
              Social Entertainments <i className="fas fa-caret-down" />
            </span>

            {dropdown2 && <Dropdown2 />}
          </li>
        </ul>
        <Button1 />
      </nav>
    </>
  );
}

export default Navbar;
