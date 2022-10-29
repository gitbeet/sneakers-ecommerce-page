import React from "react";
import * as ReactDOM from "react-dom";
import ImageCarousel from "./ImageCarousel";
import closeButton from "../images/icon-close.svg";
import "../css/imageModal.css";

function ImageModal({ toggleImageModal, activeModalImage }) {
  return ReactDOM.createPortal(
    <div>
      <img
        className="modal-close-button"
        onClick={toggleImageModal}
        src={closeButton}
        alt="close button"
      />
      <ImageCarousel modal={true} initialActiveImage={activeModalImage} />
      <div onClick={toggleImageModal} className="desktop-backdrop"></div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ImageModal;
