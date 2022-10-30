import React from "react";
import * as ReactDOM from "react-dom";
import "../css/MobileMenu.css";
import closeIcon from "../images/icon-close.svg";
import Backdrop from "./Backdrop";

function MobileMenu({ show, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div className={show ? "mobile-menu" : "mobile-menu-hidden"}>
        <img
          className="mobile-menu-close-button"
          onClick={onClose}
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
      {show && <Backdrop onClick={onClose} />}
    </>,
    document.getElementById("modal-root")
  );
}

export default MobileMenu;
