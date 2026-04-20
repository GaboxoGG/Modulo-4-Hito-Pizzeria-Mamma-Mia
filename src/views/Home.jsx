import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const pizzas = [
  {
    name: "Pizza Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Pizza Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Pizza Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <CardPizza key={index} {...pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;