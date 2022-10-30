import { createContext, useContext } from "react";
import { useState } from "react";

const modalContext = createContext();
export function useModal() {
  const context = useContext(modalContext);
  if (!context) throw new Error("There is no context");
  return context;
}

function ModalProvider({ children }) {
  const [showShoppingCartWindow, setShowShoppingCartWindow] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(0);

  function toggleShoppingCartWindow() {
    setShowShoppingCartWindow((prev) => !prev);
  }

  function toggleImageModal(activeImage) {
    setShowImageModal((prev) => !prev);
    setActiveModalImage(activeImage);
  }

  return (
    <modalContext.Provider
      value={{
        showShoppingCartWindow,
        toggleShoppingCartWindow,
        showImageModal,
        toggleImageModal,
        activeModalImage,
      }}
    >
      {children}
    </modalContext.Provider>
  );
}

export default ModalProvider;
