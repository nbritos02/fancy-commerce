import PropTypes from "prop-types";

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <input
      type="search"
      value={searchInput}
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
