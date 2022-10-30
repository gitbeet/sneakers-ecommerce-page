import React, { useState } from "react";
import "../css/ShoppingCartButtons.css";
import ShoppingCartIcon from "../images/icon-cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Button from "./Button";
import QuantityButton from "./QuantityButton";

function ShoppingCartButtons({ product }) {
  const { addToCart } = useShoppingCart();

  const [quantity, setQuantity] = useState(0);

  const buttonContent = (
    <>
      <img
        className="shopping-cart-icon"
        src={ShoppingCartIcon}
        alt="shopping cart icon"
      />
      Add to cart
    </>
  );

  return (
    <div className="shopping-cart-buttons">
      <div className="shopping-cart-quantity-buttons">
        <QuantityButton
          type="minus"
          onClick={() => setQuantity((prev) => (prev < 2 ? 0 : prev - 1))}
        />
        <div className="shopping-cart-quantity-number">{quantity || 0}</div>
        <QuantityButton
          type="plus"
          onClick={() => setQuantity((prev) => prev + 1)}
        />
      </div>
      <Button
        type="primary"
        size="md"
        onClick={() => addToCart(product, quantity)}
        content={buttonContent}
      />
    </div>
  );
}

export default ShoppingCartButtons;
