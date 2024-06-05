import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useContext } from "react";
import { toast } from "react-toastify"; 

import { CartContext } from "../../context/CartContext"

const Contador = ({producto}) => {

  const {carrito, agregarProducto, quitarProducto} = useContext(CartContext)
  
  const addProducto = () => {
    if (producto.stock <= producto.cantidad) {
      toast.error("No hay mas Stock disponible");
    }else {
      //Clonamos el producto selecionado y cambiamos la cantidad a 1
      const product = {...producto, cantidad: 1}
      //Sumamos el producto modificado al carrito
      agregarProducto(product);
    }
  }

  const removeProducto = () => {
    if (producto.cantidad > 1) {
      quitarProducto(producto.id);
    }else{
      toast.error("No puedes agregar menos de 1");
    }
  }


  return (
    <div className="d-flex justify-content-center align-items-center">
      <FiMinusCircle className={producto.cantidad === 1 ? "circuloDesactivado": "circuloMenos"} onClick={removeProducto}/>
      <div className="mx-2">{producto.cantidad}</div>
      <FiPlusCircle  className={producto.cantidad >= producto.stock ? "circuloDesactivado": "circuloMenos"} onClick={addProducto} />
    </div>
  )
}

export default Contador