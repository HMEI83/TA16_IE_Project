import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Dropdown1, Dropdown2, Dropdown3 } from "./Dropdown";
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.png';
import { Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu } from './NavBarElem'

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
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
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
            <img className = "logo" src={logo} alt='logo'/>
          </NavLogo>
            <NavMenu style={{fontFamily: "Geneva", fontSize: "19px"}}>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLink>
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                <NavLink to='life' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Life in AU <i className="fas fa-caret-down" /></NavLink>
                {dropdown1 && <Dropdown1 />}
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                <NavLink to='learn' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Learning English <i className="fas fa-caret-down" /></NavLink>
                {dropdown2 && <Dropdown2 />}
              </NavItem>
              <NavItem onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                <NavLink to='social' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Social Entertainments <i className="fas fa-caret-down" /></NavLink>
                {dropdown3 && <Dropdown3 />}
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown1, setDropdown1] = useState(false);
//   const [dropdown2, setDropdown2] = useState(false);
//   const [dropdown3, setDropdown3] = useState(false);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(true);
//     }
//   };

//   const onMouseLeave1 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown1(false);
//     } else {
//       setDropdown1(false);
//     }
//   };

//   const onMouseEnter2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(true);
//     }
//   };

//   const onMouseLeave2 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown2(false);
//     } else {
//       setDropdown2(false);
//     }
//   };

//   const onMouseEnter3 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown3(false);
//     } else {
//       setDropdown3(true);
//     }
//   };

//   const onMouseLeave3 = () => {
//     if (window.innerWidth < 960) {
//       setDropdown3(false);
//     } else {
//       setDropdown3(false);
//     }
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//         <div>VICISH<br></br>Victoria Internation student help</div>
//         </Link>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter1}
//             onMouseLeave={onMouseLeave1}
//           >
//             <Link to="life"  className="nav-links" onClick={closeMobileMenu}>
//               Life in AU <i className="fas fa-caret-down" />
//             </Link>

//             {dropdown1 && <Dropdown1 />}
//           </li>

//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter3}
//             onMouseLeave={onMouseLeave3}
//           >
//             <Link to="learn"  className="nav-links" onClick={closeMobileMenu}>
//               Learning Language <i className="fas fa-caret-down" />
//             </Link>

//             {dropdown3 && <Dropdown3 />}
//           </li>

//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter2}
//             onMouseLeave={onMouseLeave2}
//           >
//             <Link to="social"  className="nav-links" onClick={closeMobileMenu}>
//               Social Entertainments <i className="fas fa-caret-down" />
//             </Link>

//             {dropdown2 && <Dropdown2 />}
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

export default Navbar;