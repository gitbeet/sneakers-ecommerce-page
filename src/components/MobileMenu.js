import React from "react";
import * as ReactDOM from "react-dom";
import "../css/MobileMenu.css";
import closeIcon from "../images/icon-close.svg";
import Backdrop from "./Backdrop";

function MobileMenu({ toggleMenu }) {
  return ReactDOM.createPortal(
    <div className="mobile-menu-container">
      <div className="mobile-menu">
        <img
          className="mobile-menu-close-button"
          onClick={toggleMenu}
          src={closeIcon}
          alt="close icon"
        />
        <div className="mobile-nav-elements">
          <p className="mobile-nav-element">Collections</p>
          <p className="mobile-nav-element">Men</p>
          <p className="mobile-nav-element">Women</p>
          <p className="mobile-nav-element">About</p>
          <p className="mobile-nav-element">Contact</p>
        </div>
      </div>
      <Backdrop onClick={toggleMenu} />
    </div>,
    document.getElementById("modal-root")
  );
}

export default MobileMenu;
