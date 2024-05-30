import { useState } from "react";

import "./styles/App.css";

import useProducts from "./hooks/useProducts";

import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const products = useProducts(setLoading);

  return (
    <>
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {loading ? (
        <Loader />
      ) : null}
      <ProductList products={products} searchInput={searchInput} />
    </>
  );
}

export default App;
