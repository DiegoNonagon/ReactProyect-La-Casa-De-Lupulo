import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import cartIcon from "../assets/cart.ico";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <img src={cartIcon} alt="cart icon" />
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
