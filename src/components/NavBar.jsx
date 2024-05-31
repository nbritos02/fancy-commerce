import PropTypes from "prop-types";

import "../styles/NavBar.css";

import Header from "./Header";
import SearchBar from "./SearchBar";

const NavBar = ({ searchInput, setSearchInput }) => {
  return (
    <nav>
      <Header setSearchInput={setSearchInput} />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </nav>
  );
};

NavBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func.isRequired,
};

export default NavBar;
