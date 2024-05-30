import PropTypes from "prop-types";
import Product from "./Product";

import "../styles/ProductList.css";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, searchInput }) => {
  const filteredSearchInput = searchInput.toLowerCase();

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => {
    return filteredSearchInput === ""
      ? product
      : product.title.toLowerCase().includes(filteredSearchInput);
  });

  return (
    <section>
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product__card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <Product product={product} />
        </div>
      ))}
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  searchInput: PropTypes.string,
};

export default ProductList;
