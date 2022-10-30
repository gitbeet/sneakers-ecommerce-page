import { createContext, useContext } from "react";
import { useState } from "react";
import { productData } from "../productData";

const context = createContext();
export function useShoppingCart() {
  const shoppingCartContext = useContext(context);
  if (!shoppingCartContext) throw new Error("There is no context");
  return shoppingCartContext;
}

function ShoppingCartProvider({ children }) {
  const [products, setProducts] = useState(productData);
  const [shoppingCart, setShoppingCart] = useState([]);

  function addToCart(prod, quantity) {
    if (quantity === 0) return;
    setShoppingCart((prev) => {
      return prev.length === 0
        ? [...prev, { ...prod, quantity: quantity }]
        : prev.findIndex((product) => product.id === prod.id) === -1
        ? [...prev, { ...prod, quantity: quantity }]
        : prev.map((product) => {
            return product.id === prod.id
              ? { ...product, quantity: product.quantity + quantity }
              : { ...product };
          });
    });
  }

  function removeProduct(id) {
    setShoppingCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <context.Provider
      value={{
        products,
        shoppingCart,
        removeProduct,
        addToCart,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default ShoppingCartProvider;
