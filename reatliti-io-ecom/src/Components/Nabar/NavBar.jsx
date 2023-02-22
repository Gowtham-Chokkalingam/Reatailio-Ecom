import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navList } from "./MenuList";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = navList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} activeclassname="active">
          {title} {title === "Cart" && <BsCart4></BsCart4>}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        RealitiIo<font>E-Com</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
