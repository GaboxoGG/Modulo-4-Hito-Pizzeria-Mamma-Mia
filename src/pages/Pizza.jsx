import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas/p001"
      );

      const data = await response.json();

      setPizza(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return <h2 className="text-center mt-5">Cargando pizza...</h2>;
  }

  return (
    <div className="container py-5">

      <div className="card shadow-lg">

        <div className="row g-0">

          <div className="col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid h-100"
              style={{ objectFit: "cover", minHeight: "400px" }}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">

              <h2>{pizza.name}</h2>

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
                Precio: ${pizza.price.toLocaleString()}
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