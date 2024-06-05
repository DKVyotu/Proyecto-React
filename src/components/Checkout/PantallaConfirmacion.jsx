import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const PantallaConfirmacion = ({fecha, id}) => {
  
  return (
    <div className="d-flex justify-content-center footerAbajo">
        <div className="d-flex justify-content-center flex-column text-center">
            <FaCheckSquare  className="icon80verde align-self-center mb-5" />
            <div>
                <h1>Gracias por tu compra</h1>
                <p>Tu pedido fue realizado con éxito</p>
                <p>Tu Id de Pedido es: {id}</p>
                <p>Fecha de Creacion es: {fecha}</p>
                <p className="mb-5">Un asesor se contactara con usted para completar la orden</p>
                <Link className="link-estilo botonComprar" to={"/"}>Ir a home</Link>
                
            </div>        
        </div>
    </div>
  )
}

export default PantallaConfirmacion