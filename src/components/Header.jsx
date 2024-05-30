import MainHeader from "../styles/Header.module.css";
import '../styles/Header.css'
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={MainHeader} onClick={() => navigate("/")}>
        Fancy Commerce
      </h1>
      <img
        className="home__svg"
        src={home}
        alt="home"
        onClick={() => navigate("/")}
      />
    </>
  );
};

export default Header;
