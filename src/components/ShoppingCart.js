import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/shoppingCart.css";
import shoppingCartIcon from "../images/icon-cart.svg";

function ShoppingCart({ toggleShoppingCartWindow }) {
  const { checkout } = useShoppingCart();

  // let totalQuantity = checkout.reduce((acc,x) => acc + x.quantity,0)
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

export default ShoppingCart;
