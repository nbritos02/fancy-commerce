import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ products, searchInput }) => {

  const filteredSearchInput = searchInput.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return filteredSearchInput === ""
      ? product
      : product.title.toLowerCase().includes(filteredSearchInput);
  });

  return (
    <section>
      {filteredProducts.map((product) => (
        <figure key={product.id}>
          <Product product={product} />
        </figure>
      ))}
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  searchInput: PropTypes.string,
};

export default ProductList;
