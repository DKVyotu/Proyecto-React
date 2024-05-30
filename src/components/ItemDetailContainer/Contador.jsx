import { useState } from "react";
import { toast } from "react-toastify"; 
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Contador = ({ stock, addProducto }) => {
  const [Numero, setNumero] = useState(1);

  const handleClickSumar = () => {
    if (Numero < stock) {
      setNumero(Numero + 1);
      toast.success("Se agrego 1", {
        icon: false,
      });
    } else {
      toast.error("No hay mas Stock disponible");
    }
  };

  const handleClickRestar = () => {
    if (Numero > 1) {
      setNumero(Numero - 1);
      toast.warning("Se resto 1");
    } else {
      toast.error("No se puede restar mas al Stock Actual");
    }
  };
  
  const handleClickAgregar = () => {
    addProducto(Numero);
  };


  return (
    <>
      <div className="contenedor">
        <button className="botonAgregar" onClick={handleClickAgregar} >Agregar</button>
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
    </>
  );
};

export default Contador;
