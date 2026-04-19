import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <>
      <Header />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fnapolitana-1239077_640.jpg?alt=media"
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640.jpg?alt=media"
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpepperoni-1239077_640.jpg?alt=media"
        />
      </div>
    </>
  );
};

export default Home;