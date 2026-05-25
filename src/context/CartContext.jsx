import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (pizza) => {
    const existing = cart.find(
      (item) => item.id === pizza.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...pizza,
          count: 1,
        },
      ]);
    }
  };

  // Incrementar cantidad
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      )
    );
  };

  // Disminuir cantidad
  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count - 1,
              }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Total del carrito
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};