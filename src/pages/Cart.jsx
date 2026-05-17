import { useState } from "react";
import pizzaCart from "../data/pizzaCart";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // ➕ aumentar cantidad
  const increase = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  // ➖ disminuir cantidad
  const decrease = (id) => {
    setCart(cart
      .map(p =>
        p.id === id ? { ...p, count: p.count - 1 } : p
      )
      .filter(p => p.count > 0)
    );
  };

  // 💰 total
  const total = cart.reduce(
    (acc, p) => acc + p.price * p.count,
    0
  );

  return (
    <div className="container py-4">
      <h2>Carrito</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <div className="d-flex align-items-center gap-2">
            <img src={pizza.img} alt={pizza.name} width={60} />
            <span>{pizza.name}</span>
          </div>

          <span>${pizza.price.toLocaleString()}</span>

          <div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>

            <span className="mx-2">{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h3>Total: ${total.toLocaleString()}</h3>

      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;