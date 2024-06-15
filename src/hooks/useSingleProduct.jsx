import { useState, useEffect } from "react";

import getSingleProductService from "../services/getSingleProductService";

const useSingleProduct = ({ setLoading, id }) => {
  const [singleProduct, setSingleProduct] = useState({});

  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const json = await getSingleProductService(url);
        setSingleProduct(json);
        window.scrollTo(0, 0);
      } catch (error) {
        setSingleProduct(null);
      } finally {
        setLoading(false);
      }
    };

    getSingleProduct();
  }, []);

  return singleProduct;
};

export default useSingleProduct;
