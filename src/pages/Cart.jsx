import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {

  // Context carrito
  const {
    cart,
    increment,
    decrement,
  } = useCart();

  // Context usuario
  const { token } = useUser();

  // Total
  const total = cart.reduce(
    (sum, pizza) =>
      sum + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container py-4">

      <h2 className="mb-4">
        Detalles del pedido:
      </h2>

      {/* Carrito vacío */}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Productos */}
          {cart.map((pizza) => {

            const subtotal =
              pizza.price * pizza.count;

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
                    width="70"
                    height="70"
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
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

          {/* Total */}
          <div className="mt-4 text-center">

            <h2>
              Total: $
              {total.toLocaleString("es-CL")}
            </h2>

            {/* Botón pagar */}
            <button
              className="btn btn-dark mt-2"
              disabled={!token}
            >
              Pagar
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;