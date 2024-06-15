import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "../styles/NavBar.css";
import shoppingcart from "../assets/shopping-cart.svg";

import Header from "./Header";
import SearchBar from "./SearchBar";

const NavBar = ({ searchInput, setSearchInput }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
    setSearchInput("");
  };

  return (
    <nav>
      <Header setSearchInput={setSearchInput} />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <button className="cart__button" onClick={handleClick}>
        <img src={shoppingcart} alt="" width={"40px"} height={"40px"} />
      </button>
    </nav>
  );
};

NavBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func.isRequired,
};

export default NavBar;
