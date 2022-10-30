import "./css/app.css";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import ProductInfo from "./components/ProductInfo";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import ShoppingCartWindow from "./components/ShoppingCartWindow";
import ImageModal from "./components/ImageModal";
import ModalProvider from "./context/ModalContext";
import { useState } from "react";
import DarkModeProvider from "./context/DarkModeContext";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  function toggleMobileMenu() {
    console.log(showMobileMenu);
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <DarkModeProvider>
      <ModalProvider>
        <ShoppingCartProvider>
          <div className="container">
            <ShoppingCartWindow />
            <NavBar toggleMobileMenu={toggleMobileMenu} />
            <ProductInfo />
            <ImageModal />
            <MobileMenu show={showMobileMenu} onClose={toggleMobileMenu} />
          </div>
        </ShoppingCartProvider>
      </ModalProvider>
    </DarkModeProvider>
  );
}

export default App;
