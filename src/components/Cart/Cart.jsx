import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import Contador from "./contador";


const Cart = () => {
    const {carrito, vaciarCarrito, borrarProductoEspecifico, precioTotal, cantidadCarrito} = useContext(CartContext)

  return (
    <div className="d-flex justify-content-center footerAbajo">
        {cantidadCarrito() === 0 ?
         <div className="d-flex justify-content-center flex-column text-center">

            <h1 >¡Tu carrito está vacío!</h1>
            <h2 className="m-3" >😥</h2>
            <h3 className="mb-5">¿Qué esperas para llenarlo?</h3>
            
            <div className="d-flex justify-content-center">
                <Link className="link-estilo btn btn-warning colortextoblanco me-4" to={"/"} >Ir al Inicio</Link>
                <Link className="link-estilo btn btn-success colortextoblanco" to={"/Productos"} >Ir a Comprar</Link>
            </div>
         </div>
          : 
        <div className="max1200">
            <h1 className="text-center p-5">Carrito</h1>
            
            <div className="d-flex justify-content-between px-3">
                <div>             
                    <table className="tabla">
                        <thead >
                            <tr>
                                <th scope="col"></th>
                                <th className="text-start" scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                <th scope="col">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map( (producto)=>(
                            <tr key={producto.id} >                                
                                <td><img src={producto.imagen} alt="" width={50}/></td>                                
                                <td className="text-start"><Link className="link-estilo " to={"/Producto/"+producto.id}>{producto.nombre}</Link></td>
                                <td>${producto.precio}</td>
                                <td><Contador producto={producto}/></td>
                                <td>${producto.precio*producto.cantidad}</td>
                                <td><button className="btn" onClick={()=> borrarProductoEspecifico(producto.id)}><FaRegTrashAlt color="#DC3545" /></button></td>                                
                            </tr>))}   
                        </tbody>
                    </table>
                    <button className="btn btn-outline-danger my-5" onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
                
                <div className="d-flex  flex-column resumen ">
                    <h4 className="text-center fw-bold">Resumen</h4>
                    <hr />
                    {carrito.map( (producto)=>(
                    <div className="d-flex justify-content-between" key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>${producto.precio*producto.cantidad}</p>
                    </div>))}
                    <hr />
                    <div className="d-flex justify-content-between">
                        <h5>Precio total: </h5>
                        <h5>${precioTotal()}</h5>
                    </div>
                    <div className="d-flex my-4">
                        <input className="form-control me-3" type="text" placeholder="Cupon"/>
                        <button  className="btn btn-outline-secondary">Aplicar</button>
                    </div>
                    <div className="d-flex justify-content-center">
                    <Link className="link-estilo botonComprar" to={"/Checkout"}>Comprar</Link>
                    </div>
                </div>
            </div>
        </div>}
        
        
        
    </div>

  )
}

export default Cart