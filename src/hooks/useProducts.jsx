import { useState, useEffect } from "react";
import getAllProductsService from "../services/getAllProductsService.js";

const useProducts = (setLoading) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const resp = await getAllProductsService();
        setProducts(resp);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  return products;
};

export default useProducts;
