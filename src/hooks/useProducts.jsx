import { useState, useEffect } from "react";

const useProducts = () => {
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

  return products;
};

export default useProducts;
