const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <img src={img} alt={name} width="100%" />

      <h3>{name}</h3>

      <p>Ingredientes:</p>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>

      <p><strong>Precio: ${price.toLocaleString()}</strong></p>

      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
};

export default CardPizza;