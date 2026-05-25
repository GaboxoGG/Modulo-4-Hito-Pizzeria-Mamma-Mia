import { useEffect, useState } from "react";

import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener pizzas desde el backend
  const getPizzas = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas"
      );

      // Verificar si la respuesta fue correcta
      if (!response.ok) {
        throw new Error(
          "Error al obtener las pizzas"
        );
      }

      const data = await response.json();

      // Guardar pizzas en el estado
      setPizzas(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar fetch al cargar la página
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Contenido */}
      <div className="container py-4">

        {/* Loading */}
        {loading ? (
          <h3 className="text-center">
            Cargando pizzas...
          </h3>
        ) : (
          <div className="row g-4">

            {/* Cards */}
            {pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            ))}

          </div>
        )}
      </div>
    </>
  );
};

export default Home;