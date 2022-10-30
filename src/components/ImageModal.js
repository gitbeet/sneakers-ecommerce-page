import * as ReactDOM from "react-dom";
import ImageCarousel from "./ImageCarousel";
import closeButton from "../images/icon-close.svg";
import "../css/ImageModal.css";
import { useModal } from "../context/ModalContext";
import Backdrop from "./Backdrop";

function ImageModal() {
  const { activeModalImage, toggleImageModal, showImageModal } = useModal();
  return ReactDOM.createPortal(
    <>
      {showImageModal && (
        <div>
          <img
            className="modal-close-button"
            onClick={toggleImageModal}
            src={closeButton}
            alt="close button"
          />
          <ImageCarousel modal={true} initialActiveImage={activeModalImage} />
        </div>
      )}
      {showImageModal && <Backdrop onClick={toggleImageModal} opacity="75%" />}
    </>,
    document.getElementById("modal-root")
  );
}

export default ImageModal;
