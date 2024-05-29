import { useState } from "react";

import useProducts from "./hooks/useProducts";

import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const products = useProducts();

  return (
    <>
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ProductList products={products} searchInput={searchInput} />
    </>
  );
}

export default App;
