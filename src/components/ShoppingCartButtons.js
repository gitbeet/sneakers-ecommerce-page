import React from "react";
import "../css/shoppingCartButtons.css";
import ShoppingCartIcon from "../images/icon-cart.svg";
import buttonMinus from "../images/icon-minus.svg";
import buttonPlus from "../images/icon-plus.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Button from "./Button";

function ShoppingCartButtons() {
  const { product, shoppingCart, addProduct, removeProduct, addToCart } =
    useShoppingCart();

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
        <div
          className="shopping-cart-quantity-button"
          onClick={() => removeProduct(product)}
        >
          <img src={buttonMinus} alt="shopping cart button" />
        </div>
        <div className="shopping-cart-quantity-number">
          {shoppingCart[0]?.quantity || 0}
        </div>

        <div
          className="shopping-cart-quantity-button"
          onClick={() => addProduct(product)}
        >
          <img src={buttonPlus} alt="shopping cart button" />
        </div>
      </div>
      <Button
        type="primary"
        size="md"
        onClick={() => addToCart(product)}
        content={buttonContent}
      />
    </div>
  );
}

export default ShoppingCartButtons;
