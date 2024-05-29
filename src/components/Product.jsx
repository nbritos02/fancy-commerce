import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <img
        src={product.image}
        alt="product-img"
        width={"100px"}
        height={"100px"}
      />
      <figcaption>{product.title}</figcaption>
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
