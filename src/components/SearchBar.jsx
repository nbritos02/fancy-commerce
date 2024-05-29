import PropTypes from "prop-types";

import MainSearchBar from'../styles/SearchBar.module.css'

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <input
      type="search"
      value={searchInput}
      className={MainSearchBar}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Search"
    />
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
