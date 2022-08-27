import React, { useState } from "react";
import { lifeInAustraliaDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <ul className={dropdown ? "life-submenu clicked" : "life-submenu"}
      onClick={() => {setDropdown(!dropdown)}}>
        {lifeInAustraliaDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
