import { useEffect, useState } from "react";

import Productos from "../../data/Productos";
import CardProducto from "./CardProducto";

const Cards = () => {
  const [productosObtenidos, setProductosObtenidos] = useState([]);

  useEffect(() => {
    Productos().then((respuesta) => {
        setProductosObtenidos(respuesta);
        });
  }, []);

  return (
    // Contenedor de Cards
    <div className="d-flex flex-wrap justify-content-center m-4">
      {productosObtenidos.map((producto) => (
        <CardProducto key={producto.id} producto={producto}/>
      ))}
    </div>
  );
};

export default Cards;
