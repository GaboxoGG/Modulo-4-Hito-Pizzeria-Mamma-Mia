import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Pizza = () => {

  // Obtener ID desde la URL
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {

      const response = await fetch(
        `http://localhost:5000/api/pizzas/${id}`
      );

      const data = await response.json();

      setPizza(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizza();
  }, [id]);

  // Loading
  if (!pizza) {
    return (
      <h2 className="text-center mt-5">
        Cargando pizza...
      </h2>
    );
  }

  return (
    <div className="container py-5">

      <div className="card shadow-lg">

        <div className="row g-0">

          {/* Imagen */}
          <div className="col-md-6">

            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid h-100"
              style={{
                objectFit: "cover",
                minHeight: "400px",
              }}
            />

          </div>

          {/* Info */}
          <div className="col-md-6">

            <div className="card-body">

              <h2 className="text-capitalize">
                {pizza.name}
              </h2>

              <hr />

              <p>{pizza.desc}</p>

              <h5>Ingredientes:</h5>

              <ul>
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>
                    🍕 {ing}
                  </li>
                ))}
              </ul>

              <h3 className="mt-4">
                Precio: $
                {pizza.price.toLocaleString("es-CL")}
              </h3>

              <button className="btn btn-dark mt-3">
                Añadir al carrito 🛒
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pizza;