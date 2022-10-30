import React from "react";
import "../css/shoppingCartButtons.css";
import ShoppingCartIcon from "../images/icon-cart.svg";
import buttonMinus from "../images/icon-minus.svg";
import buttonPlus from "../images/icon-plus.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Button from "./Button";
import QuantityButton from "./QuantityButton";

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
        <QuantityButton type="minus" onClick={() => removeProduct(product)} />
        <div className="shopping-cart-quantity-number">
          {shoppingCart[0]?.quantity || 0}
        </div>
        <QuantityButton type="plus" onClick={() => addProduct(product)} />
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
