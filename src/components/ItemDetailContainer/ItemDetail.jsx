import Contador from "./Contador";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ producto }) => {

  const {agregarProducto, carrito} = useContext(CartContext)

  const addProducto = (Numero) => {
    const productoCarrito = {...producto, cantidad: Numero}
    agregarProducto(productoCarrito);
     
  }


  const productoEnCarrito = carrito.find(item => item.id === producto.id);


  return (
    <div className="d-flex justify-content-center footerAbajo mt-5">
      <div className="d-flex justify-content-between max1200 mt-5">
        
        <div className="d-flex">          
          <div>
          <img className="impProductoGrande" src={producto.imagen} alt="" />
          </div>

          <div className="ms-5">
            <h1>{producto.nombre}</h1>
            <div>
              <p>Presentacion: {producto.descripcion}</p>
              <p>Variedad: {producto.variedad}</p>
              <p>Stock: {producto.stock}</p>
            </div>
          </div>
        </div>

        <div className="">          
          <h4 className="pb-4">Precio: <b>${producto.precio}</b></h4>
          {producto.stock <= 0 ? 
            <div className="botonAgotado">
              <p className="text-center">Producto Agotado</p>
            </div> 
            :  
            <>
              <Contador stock={producto.stock} id={producto.id} addProducto={addProducto} /> 
              {productoEnCarrito ? 
                <p className="mt-2">Tienes {productoEnCarrito.cantidad} de este producto en el carrito</p>
                : 
                <p className="mt-2">Aun no tienes este producto en tu carrito</p>
              } 
            </>
          }
          
          
                                  
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;
