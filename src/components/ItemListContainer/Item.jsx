import { Link } from "react-router-dom";
import "./Item.css";


const CardProducto = ({ producto }) => {

  const contenidoProducto = (
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
          {producto.stock === 0 ? <button className="botonVerMas">Agotado</button> : <button className="botonVerMas">Ver más...</button>}
        </div>
      </div>
    </div>
  );
  

  return (
    producto.stock === 0 ? 
      <div className="desactivado">
        {contenidoProducto}
      </div>
      : 
      <Link className="link-estilo" to={`/Producto/${producto.id}`}>
        {contenidoProducto}
      </Link>    
  );
};

export default CardProducto;
