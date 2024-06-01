import { useState } from "react";
import { toast } from "react-toastify"; 
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";



const Contador = ({ stock, addProducto }) => {
  const [Numero, setNumero] = useState(1);

  const handleClickSumar = () => {
    if (Numero < stock) {
      setNumero(Numero + 1);
    } else {
      toast.error("No hay mas Stock disponible");
    }
  };

  const handleClickRestar = () => {
    if (Numero > 1) {
      setNumero(Numero - 1);
    } else {
      toast.error("No puedes agregar menos de 1");
    }
  };
  
  const handleClickAgregar = () => {
    addProducto(Numero);    
    
  };


  return (
    <>
      <div className="contenedor">        
        <button className="botonAgregar" onClick={handleClickAgregar} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Agregar</button>
        <div className="d-flex">
          <p className="numero">{Numero}</p>
          <div>
            <button className="botonMas" onClick={handleClickSumar} >
              <IoMdArrowDropup />
            </button>
            <button className="botonMenos" onClick={handleClickRestar}>
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>          
      </div>

      {/* Modal  */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content m-4">
            <div className="d-flex flex-column text-center m-4">
              
              <IoCheckmarkCircleOutline className="icon80verde align-self-center m-3"/>                
              <h2 className="my-3">Producto agregado al carrito</h2>
              <h5 className="my-2">Se agrego {Numero}</h5>
            </div>
            <div className="d-flex align-self-center pb-4">
              <button type="button" className="botonSalir mx-2" data-bs-dismiss="modal">Seguir Comprando</button>
              <a className="btn botonComprar colortextoblanco mx-2" href="/Carrito">Ir al Carrito</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contador;
