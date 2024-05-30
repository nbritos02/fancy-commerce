import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";

import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setSingleProduct(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleProduct();
  });

  if (loading) return <Loader />

  return singleProduct ? (
    <>
      <div className="product__container">
        <h2>{singleProduct.title}</h2>
        <img src={singleProduct.image} alt="product" />
        <h3>$ {singleProduct.price}</h3>
      </div>
      <div className="product__separator"></div>
      <div className="product__data">
        <h2>Description</h2>
        <p>{singleProduct.description}.</p>
        <p className="p__category">Category: {singleProduct.category}</p>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default ProductDetail;
