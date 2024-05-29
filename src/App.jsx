import { useState, useEffect } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const json = await resp.json();
        setProducts(json);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      <h1>Fake Store App</h1>
      <input
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
      />
      <section>
        {products
          .filter((product) => {
            return searchInput.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(searchInput);
          })
          .map((product) => (
            <figure key={product.id}>
              <img
                src={product.image}
                alt="product-img"
                width={"100px"}
                height={"100px"}
              />
              <figcaption>{product.title}</figcaption>
              <p>$ {product.price}</p>
            </figure>
          ))}
      </section>
    </>
  );
}

export default App;
