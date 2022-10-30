import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/ShoppingCartNav.css";
import shoppingCartIcon from "../images/icon-cart.svg";

function ShoppingCartNav({ toggleShoppingCartWindow }) {
  const { checkout } = useShoppingCart();
  let totalQuantity = checkout.length;
  return (
    <div onClick={toggleShoppingCartWindow} className="shopping-cart">
      <img src={shoppingCartIcon} alt="shopping cart icon" />
      {totalQuantity > 0 && (
        <div className="shopping-cart-quantity">{totalQuantity}</div>
      )}
    </div>
  );
}

export default ShoppingCartNav;
