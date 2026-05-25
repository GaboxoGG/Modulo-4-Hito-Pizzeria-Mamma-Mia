import { useCart } from "../context/CartContext";

const CardPizza = ({
  id,
  name,
  price,
  ingredients,
  img,
}) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id,
      name,
      price,
      ingredients,
      img,
    });
  };

  return (
    <div className="col-md-4">
      <div className="card h-100 shadow">
        <img
          src={img}
          className="card-img-top"
          alt={name}
        />

        <div className="card-body">
          <h5 className="card-title text-capitalize">
            {name}
          </h5>

          <hr />

          <p className="text-muted">
            Ingredientes:
          </p>

          <ul>
            {ingredients.map((ing, index) => (
              <li key={index}>
                🍕 {ing}
              </li>
            ))}
          </ul>

          <hr />

          <h5 className="text-center">
            Precio: $
            {price.toLocaleString("es-CL")}
          </h5>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-dark">
              Ver Más 👀
            </button>

            <button
              className="btn btn-dark"
              onClick={handleAdd}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;