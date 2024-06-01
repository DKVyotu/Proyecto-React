import { Link } from "react-router-dom";
import "./Item.css";


const CardProducto = ({ producto }) => {
  return (
    <Link className="link-estilo " to={"/Producto/"+producto.id}>
      <div className="d-flex m-3 producto">
        <img className="imgProducto" src={producto.imagen} alt="" />
        <div className="d-flex flex-column justify-content-between m-3">
          <div className="contenidoProducto d-flex flex-column justify-content-center">
            <h3 className="text-center">{producto.nombre}</h3>
            <p>{producto.variedad}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
          </div>
          <div>
            <button className="botonVerMas">Ver mas...</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProducto;
