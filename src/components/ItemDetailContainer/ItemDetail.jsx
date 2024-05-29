import Contador from "./Contador";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ producto }) => {

  const {agregarProducto} = useContext(CartContext)

  const addProducto = (Numero) => {
    const productoCarrito = {...producto, cantidad: Numero}
    agregarProducto(productoCarrito)
    
  }

  return (
    <div className="d-flex justify-content-center p-4 footerAbajo">
      <div>
        <img className="impProductoGrande" src={producto.imagen} alt="" />
      </div>
      <div className="ms-3">
        <h1 className="d-flex justify-content-center">{producto.nombre}</h1>
        <div className="py-4">
          <p>Presentacion: {producto.descripcion}</p>
          <p>Variedad: {producto.variedad}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
        </div>
        <Contador stock={producto.stock} addProducto={addProducto} />
      </div>
    </div>
  );
};

export default ItemDetail;
