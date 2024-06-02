import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const loginData = {
    username,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/JSON",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const respText = await response.text();
        throw new Error(respText);
      }

      const json = await response.json();
      console.log(json);
      setToken(json.token);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <input type="submit" value="Login" />
      </form>
      <div className="error__message">{error ? <p>{error}</p> : null}</div>
    </div>
  );
};

export default Login;
