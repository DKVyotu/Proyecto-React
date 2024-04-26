import { useState } from "react";
import { toast } from "react-toastify";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const CardContador = ({ stock }) => {
  const [Numero, setNumero] = useState(0);

  const Sumar = () => {
    if (Numero < stock) {
      setNumero(Numero + 1);
      toast.success("Se agrego 1", {
        icon: false,
      });
    } else {
      toast.error("No hay mas Stock disponible");
    }
  };

  const Restar = () => {
    if (Numero >= 1) {
      setNumero(Numero - 1);
      toast.warning("Se resto 1");
    } else {
      toast.error("No se puede restar mas al Stock Actual");
    }
  };

  return (
    <>
      <div className="contenedor">
        <button className="botonAgregar" >Agregar</button>
        <div className="d-flex">
          <p className="numero">{Numero}</p>
          <div>
            <button className="botonMas" onClick={Sumar} >
              <IoMdArrowDropup />
            </button>
            <button className="botonMenos" onClick={Restar}>
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContador;
