const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm h-100">

        <img src={img} className="card-img-top" alt={name} />

        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>

          <hr />

          <p className="text-muted mb-1">Ingredientes:</p>

          <p>
            🍕 {ingredients?.join(", ")}
          </p>

          <hr />

          <h6 className="fw-bold">
            Precio: ${price.toLocaleString()}
          </h6>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-dark btn-sm">
              Ver Más 👀
            </button>

            <button className="btn btn-dark btn-sm">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;