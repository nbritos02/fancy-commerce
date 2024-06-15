import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import Loader from "./Loader";

import "../styles/ProductDetail.css";

import useSingleProduct from "../hooks/useSingleProduct";
import { CartContext } from "../contexts/CartContextProvider";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { addProd } = useContext(CartContext);

  const product = useSingleProduct({ setLoading, id });

  if (loading) return <Loader />;

  return product ? (
    <div className="product__detail">
      <div className="product__dcard">
        <h2 className="product__title">{product.title}</h2>
        <img src={product.image} alt="product" height={"50px"} width={"50px"} />
      </div>
      <div className="product__separator"></div>
      <div className="product__data">
        <h3 className="product__price">$ {product.price}</h3>
        <h2>Description</h2>
        <p>{product.description}.</p>
        <p className="p__category">Category: {product.category}</p>
        <button className="add__cart" onClick={() => addProd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default ProductDetail;
