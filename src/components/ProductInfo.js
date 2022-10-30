import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/ProductInfo.css";

import { formatCurrency } from "../utilities/formatCurrency";
import ImageCarousel from "./ImageCarousel";
import ShoppingCartButtons from "./ShoppingCartButtons";

function ProductInfo({ toggleImageModal }) {
  const { product } = useShoppingCart();

  return (
    <div className="product-info-container">
      <ImageCarousel toggleImageModal={toggleImageModal} />
      <div className="product-info">
        <p className="product-company">{product.company}</p>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="prices">
          <div className="prices-left">
            <h3 className="product-price">
              {formatCurrency((product.price * product.discount) / 100)}
            </h3>
            <h5 className="product-discount">{product.discount}%</h5>
          </div>
          <h5 className="product-original-price">
            {formatCurrency(product.price)}
          </h5>
        </div>
        <ShoppingCartButtons />
      </div>
    </div>
  );
}

export default ProductInfo;
