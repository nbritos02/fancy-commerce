import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <img src={product.image} alt="product-img" />
        <h2>{product.title}</h2>
        <p>$ {product.price}</p>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default Product;
