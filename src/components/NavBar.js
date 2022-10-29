import React from "react";
import "../css/navBar.css";
import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import avatarImage from "../images/image-avatar.png";
import ShoppingCart from "./ShoppingCart";

function NavBar({ toggleMenu, toggleShoppingCartWindow }) {
  return (
    <div className="navbar-mobile">
      <div className="mobile-nav-left">
        <img
          className="mobile-menu-icon"
          onClick={toggleMenu}
          src={iconMenu}
          alt="menu icon"
        />
        <img className="logo" src={logo} alt="logo" />
        <div className="desktop-nav-elements">
          <a className="desktop-nav-element" href="###">
            Collections
          </a>
          <a className="desktop-nav-element" href="###">
            Men
          </a>
          <a className="desktop-nav-element" href="###">
            Women
          </a>
          <a className="desktop-nav-element" href="###">
            About
          </a>
          <a className="desktop-nav-element" href="###">
            Contact
          </a>
        </div>
      </div>
      <div className="mobile-nav-right">
        <ShoppingCart toggleShoppingCartWindow={toggleShoppingCartWindow} />
        <img className="mobile-avatar" src={avatarImage} alt="avatar img" />
      </div>
    </div>
  );
}

export default NavBar;
