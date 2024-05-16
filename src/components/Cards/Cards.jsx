import { useEffect, useState } from "react";
import Productos from "../../data/Productos";
import CardProducto from "./CardProducto";
import { useParams } from "react-router-dom";

const Cards = () => {
  const [productosObtenidos, setProductosObtenidos] = useState([]);
  const { idCategoria } = useParams()

  useEffect(() => {
    Productos().then((respuesta) => {
      if (idCategoria) {
        const productofiltrado = respuesta.filter ( (resp)=> resp.categoria === idCategoria)
        setProductosObtenidos(productofiltrado)
      } else {
        setProductosObtenidos(respuesta);
      }
    });
  }, [idCategoria]);

  return (
    // Contenedor de Cards
    <div>
      <h1 className="text-center">Productos</h1>
      <div className="d-flex flex-wrap justify-content-center m-4">
        {productosObtenidos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
