import "../styles/Cart.css";
import { CartContext } from "../contexts/CartContextProvider";
import { useContext } from "react";

const Cart = () => {
  const { cartProd, removeProd } = useContext(CartContext);

  return (
    <div className="cart__wrapper">
      <h2 className="cart__title">Shopping cart</h2>
      <div className="cart__container">
        {cartProd.length === 0 ? (
          <p className="cart__empty">Cart is empty!</p>
        ) : (
          <div className="prodcart__card">
            {cartProd.map((product) => (
              <>
                <img
                  src={product.image}
                  className="p__image"
                  alt="product__image"
                />
                <div className="card__data">
                  <p className="p__title">{product.title}</p>
                  <p className="p__quantity">Quantity: {product.quantity}</p>
                  <p className="p__price">$ {product.price}</p>
                  <a
                    className="remove__product"
                    onClick={() => removeProd(product.id)}
                  >
                    Remove
                  </a>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <div className="cart__checkout">
        <h3>
          Total: $
          {cartProd
            .map((product) => product.price * product.quantity)
            .reduce((accumulator, cartTotal) => accumulator + cartTotal, 0)
            .toFixed(2)}
        </h3>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
