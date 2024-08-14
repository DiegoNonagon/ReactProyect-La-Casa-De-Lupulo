import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toCapital } from "./helpers/toCapital";
import Aos from "aos";
import "aos/dist/aos.css";

const Item = ({ producto }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" className="producto">
      <img className="prodImg" src={producto.img} alt={producto.nombre} />
      <div>
        <h4>{producto.nombre}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>{toCapital(producto.marca)}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
