import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import MainHeader from "../styles/Header.module.css";
import "../styles/Header.css";
import home from "../assets/home.svg";

const Header = ({ setSearchInput }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setSearchInput("");
  };

  return (
    <>
      <h1 className={MainHeader} onClick={handleClick}>
        Fancy Commerce
      </h1>
      <img className="home__svg" src={home} alt="home" onClick={handleClick} />
    </>
  );
};

Header.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
};

export default Header;
