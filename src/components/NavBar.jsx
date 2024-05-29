import PropTypes from "prop-types";

import "../styles/NavBar.css";
import cart from "../assets/shopping-cart-outline-svgrepo-com.svg";

import Header from "./Header";
import SearchBar from "./SearchBar";

const NavBar = ({ searchInput, setSearchInput }) => {
  return (
    <nav>
      <Header />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <img
        src={cart}
        alt="shopping-cart"
        id="shopping__cart"
      />
    </nav>
  );
};

NavBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func.isRequired,
};

export default NavBar;
