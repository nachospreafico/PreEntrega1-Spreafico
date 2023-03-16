import Imagen from "/src/assets/Logo.png";
import "./styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src={Imagen} id="logo"></img>
      </NavLink>
      <h1 className="titulo">FRODO'S BARGAINS</h1>
    </div>
  );
};

export default Header;
