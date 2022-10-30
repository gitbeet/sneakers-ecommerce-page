import React from "react";
import { useModal } from "../context/ModalContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../css/ShoppingCartWindow.css";
import Button from "./Button";
import ShoppingCartWindowProduct from "./ShoppingCartWindowProduct";
import Backdrop from "./Backdrop";

function ShoppingCartWindow() {
  const { showShoppingCartWindow, toggleShoppingCartWindow } = useModal();
  const { checkout } = useShoppingCart();
  const buttonContent = "Checkout";

  return (
    <>
      <div
        className={
          showShoppingCartWindow
            ? "shopping-cart-window"
            : "shopping-cart-window-hidden"
        }
      >
        <h2 className="shopping-cart-window-header">Cart</h2>
        <div className="shopping-cart-window-body">
          {checkout.length > 0 &&
            checkout.map((product) => (
              <ShoppingCartWindowProduct key={product.name} product={product} />
            ))}

          {checkout.length > 0 && (
            <Button type="primary" size="sm" content={buttonContent} />
          )}
        </div>
        {checkout.length === 0 && (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
      {showShoppingCartWindow && (
        <Backdrop onClick={toggleShoppingCartWindow} />
      )}
    </>
  );
}

export default ShoppingCartWindow;
