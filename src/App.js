import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";

function App() {
  const products = [
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputProduct, setInputProduct] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = () => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toUpperCase().includes(inputProduct.toUpperCase())
      )
    );
    setInputProduct("");
  };

  const handleClick = (productId) => {
    const sameItem = currentSale.some((item) => item.id === productId);
    const finding = products.find((item) => item.id === productId);

    !sameItem
      ? setCurrentSale([...currentSale, finding])
      : alert("Você já adicionou este produto no carrinho.");
  };

  return (
    <div className="App">
      <h1>Hamburgueria da Kenzie</h1>
      <div className="forms">
        <input
          placeholder="O que você está buscando?"
          onChange={(e) => setInputProduct(e.target.value)}
        />
        <button onClick={showProducts}>Pesquisar</button>
      </div>

      <MenuContainer
        handleClick={handleClick}
        products={products}
        currentSale={currentSale}
        filteredProducts={filteredProducts}
      />
      <Cart currentSale={currentSale} />
    </div>
  );
}

export default App;
