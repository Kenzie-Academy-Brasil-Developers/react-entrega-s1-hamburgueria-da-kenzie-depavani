import "./style.css";

const Cart = ({ currentSale }) => {
  return (
    <ul className="cartTotal">
      <h2>
        Carrinho <br />
        <br />
        Total - R$
        {currentSale
          .reduce(
            (initialPrice, finalPrice) => initialPrice + finalPrice.price,
            0
          )
          .toFixed(2)}{" "}
      </h2>

      {currentSale.map((item, index) => (
        <li className="eachProductCart" key={index}>
          <h2>{item.name}</h2>
          <p>
            Preço: R$
            {item.price}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
