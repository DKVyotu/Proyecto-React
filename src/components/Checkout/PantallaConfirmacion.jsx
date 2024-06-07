import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const PantallaConfirmacion = ({fecha, id}) => {
  
  return (
    <div className="gracias-container d-flex justify-content-center align-items-center footerAbajo">
      <div className="gracias-card text-center p-5 rounded shadow-lg">
        <FaCheckSquare className="icon80verde mb-4" />
        <h1 className="mb-3">¡Gracias por tu compra!</h1>
        <p className="lead mb-4">Tu pedido fue realizado con éxito</p>
        <p><strong>Tu Id de Pedido es:</strong> {id}</p>
        <p><strong>Fecha de Creación:</strong> {fecha}</p>
        <p className="mb-5">Un asesor se contactará con usted para completar la orden</p>
        <Link className="link-estilo botonComprar" to="/">Ir a Home</Link>
      </div>
    </div>
  )
}

export default PantallaConfirmacion