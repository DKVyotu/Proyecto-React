import "./Card.css";

import CardContador from "./CardContador";

const CardProducto = ({ producto }) => {
  return (
    <div className="d-flex m-3 producto">
      <img className="imgProducto" src={producto.imagen} alt="" />
      <div className="d-flex flex-column justify-content-between m-3">
        <div className="contenidoProducto d-flex flex-column justify-content-center">
          <h3 className="text-center">{producto.nombre}</h3>
          <p>{producto.variedad}</p>
          <b>Categoria: {producto.categoria}</b>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
        </div>
        <div>
          <CardContador stock={producto.stock} />
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
