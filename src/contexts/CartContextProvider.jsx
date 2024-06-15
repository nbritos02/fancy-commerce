import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cartProd, setCartProd] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProd));
  }, [cartProd]);

  const addProd = (product) => {
    setCartProd((prevProd) => {
      const prodExists = prevProd.find((prod) => prod.id === product.id);

      if (prodExists) {
        return prevProd.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      } else {
        return [
          ...prevProd,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeProd = (productId) => {
    setCartProd((prevProd) => prevProd.filter((prod) => prod.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartProd, addProd, removeProd, setCartProd }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextProvider;
