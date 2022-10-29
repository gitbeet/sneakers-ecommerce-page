import React from "react";
import * as ReactDOM from "react-dom";
import "../css/mobileMenu.css";
import closeIcon from "../images/icon-close.svg";

function MobileMenu({ toggleMenu }) {
  return ReactDOM.createPortal(
    <div className="mobile-menu-container">
      <div className="mobile-menu">
        <img onClick={toggleMenu} src={closeIcon} alt="close icon" />
        <div className="mobile-nav-elements">
          <p className="mobile-nav-element">Collections</p>
          <p className="mobile-nav-element">Men</p>
          <p className="mobile-nav-element">Women</p>
          <p className="mobile-nav-element">About</p>
          <p className="mobile-nav-element">Contact</p>
        </div>
      </div>
      <div className="mobile-backdrop"></div>
    </div>,
    document.getElementById("mobile-menu")
  );
}

export default MobileMenu;
