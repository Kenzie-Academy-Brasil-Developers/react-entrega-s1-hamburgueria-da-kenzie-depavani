const Product = ({ handleClick, item }) => {
  return (
    <div className="product">
      <h2>{item.name}</h2>
      <p>Categoria: {item.category}</p>
      <p>
        <span>R$ </span> {item.price}
      </p>
      <button onClick={() => handleClick(item.id)}>Adicionar</button>
    </div>
  );
};

export default Product;
