import './css/app.css'
import NavBar from "./components/NavBar";
import MobileMenu from './components/MobileMenu';
import ProductInfo from './components/ProductInfo';
import ShoppingCartButtons from './components/ShoppingCartButtons';
import ShoppingCartProvider from './context/ShoppingCartContext';
import { useState } from 'react';
import ShoppingCartWindow from './components/ShoppingCartWindow';
import ImageModal from './components/ImageModal';


function App() {

  const [showMobileMenu,setShowMobileMenu] = useState(false)
  const [showShoppingCartWindow,setShowShoppingCartWindow] = useState(false)
  const [showImageModal,setShowImageModal] = useState(false)
  const [activeModalImage,setActiveModalImage] = useState(0)

  function toggleMenu(){
    setShowMobileMenu(prev => !prev)
  }

  function toggleShoppingCartWindow(){
    setShowShoppingCartWindow(prev => !prev)
  }

  function toggleImageModal(activeImage){
    setShowImageModal(prev => !prev)
    setActiveModalImage(activeImage)
  }

  return (
    <ShoppingCartProvider>
      <div className="container">
        <ShoppingCartWindow 
              showShoppingCartWindow={showShoppingCartWindow}
              toggleShoppingCartWindow={toggleShoppingCartWindow} />
        <NavBar 
            toggleMenu={toggleMenu}
            toggleShoppingCartWindow={toggleShoppingCartWindow} />
        <ProductInfo toggleImageModal={toggleImageModal}/>
        {showImageModal && <ImageModal toggleImageModal={toggleImageModal} 
                                       activeModalImage={activeModalImage}/>}
        {showMobileMenu && <MobileMenu toggleMenu={toggleMenu} />}
      </div>
    </ShoppingCartProvider>
    )
}

export default App;
