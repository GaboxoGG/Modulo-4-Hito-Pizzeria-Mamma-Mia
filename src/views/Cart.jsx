import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increment, decrement } = useCart();

  // Calcular total directamente desde el carrito
  const total = cart.reduce(
    (sum, pizza) =>
      sum + Number(pizza.price) * pizza.count,
    0
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((pizza) => {
            const subtotal =
              Number(pizza.price) * pizza.count;

            return (
              <div
                key={pizza.id}
                className="d-flex justify-content-between align-items-center border-bottom py-3"
              >
                {/* Imagen + nombre */}
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                  />

                  <h6 className="mb-0 text-capitalize">
                    {pizza.name}
                  </h6>
                </div>

                {/* Subtotal */}
                <p className="mb-0 fw-bold">
                  $
                  {subtotal.toLocaleString("es-CL")}
                </p>

                {/* Cantidad */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() =>
                      decrement(pizza.id)
                    }
                  >
                    -
                  </button>

                  <span className="mx-3 fw-bold">
                    {pizza.count}
                  </span>

                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() =>
                      increment(pizza.id)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total general */}
          <div className="mt-4 text-center">
            <h2>
              Total: $
              {cart
                .reduce(
                  (sum, pizza) =>
                    sum + Number(pizza.price) * pizza.count,
                  0
                )
                .toLocaleString("es-CL")}
            </h2>

            <button className="btn btn-dark mt-2">
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;