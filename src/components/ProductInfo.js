import React from "react";
import { useModal } from "../context/ModalContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/ProductInfo.css";

import { formatCurrency } from "../utilities/formatCurrency";
import ImageCarousel from "./ImageCarousel";
import ShoppingCartButtons from "./ShoppingCartButtons";

function ProductInfo() {
  const { toggleImageModal } = useModal();
  const { products } = useShoppingCart();

  return (
    <div className="product-info-container">
      <ImageCarousel toggleImageModal={toggleImageModal} />
      <div className="product-info">
        <p className="product-company">{products[0].company}</p>
        <h2 className="product-name">{products[0].name}</h2>
        <p className="product-description">{products[0].description}</p>
        <div className="prices">
          <div className="prices-left">
            <h3 className="product-price">
              {formatCurrency((products[0].price * products[0].discount) / 100)}
            </h3>
            <h5 className="product-discount">{products[0].discount}%</h5>
          </div>
          <h5 className="product-original-price">
            {formatCurrency(products[0].price)}
          </h5>
        </div>
        <ShoppingCartButtons product={products[0]} />
      </div>
    </div>
  );
}

export default ProductInfo;
