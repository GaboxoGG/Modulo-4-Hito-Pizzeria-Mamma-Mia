import { useEffect, useState } from "react";

import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas"
      );

      const data = await response.json();

      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              {...pizza}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;