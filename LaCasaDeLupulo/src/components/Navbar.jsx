import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import herculesLogo from "../assets/hercules-logo.jpg";
import faunaLogo from "../assets/fauna-logo.png";
import buquiLogo from "../assets/buqui-logo.avif";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo1" src={logo1} alt="logo1" />
      <Link to="/" className="logo">
        <img className="logo2" src={logo2} alt="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/catalogo">
            CATÁLOGO
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/hércules">
            <img className="marcaLogo" src={herculesLogo} alt="Hércules" />
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/fauna">
            <img className="marcaLogo" src={faunaLogo} alt="Fauna" />
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/buquibichi">
            <img className="marcaLogo" src={buquiLogo} alt="BuquiBichi" />
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            CONTACTO
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
