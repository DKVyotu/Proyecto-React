import { useState } from "react";
import { toast } from "react-toastify";

const Contador = ({ stock }) => {
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
      <div className="d-flex flex-column m-2">
        <p className="me-4">Stock: {stock}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger" onClick={Restar}>
            -
          </button>
          <p className="mx-4 ">{Numero}</p>
          <button className="btn btn-primary" onClick={Sumar}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
