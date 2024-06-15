import { Route, Routes } from "react-router-dom";

import { useState } from "react";

import "./styles/App.css";

import useProducts from "./hooks/useProducts";

import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "../src/components/Cart";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const products = useProducts(setLoading);

  return (
    <>
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {loading ? <Loader /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          }
        />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
