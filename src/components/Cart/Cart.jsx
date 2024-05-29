import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

import { FaRegTrashAlt } from "react-icons/fa";


const Cart = () => {
    const {carrito, vaciarCarrito, borrarProductoEspecifico, precioTotal} = useContext(CartContext)

  return (
    <div className="d-flex justify-content-center footerAbajo">
        <div>
            <h1 className="text-center p-4">Carrito</h1>
            <div className="d-flex">
                <div>                    
                    <table class="table">
                        <thead >
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                            <th scope="col">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map( (producto)=>(
                            <tr key={producto.id}>
                                <td><img src={producto.imagen} alt="" width={50}/></td>                                
                                <td>{producto.nombre}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>${producto.precio*producto.cantidad}</td>
                                <td><button className="btn btn-danger" onClick={()=> borrarProductoEspecifico(producto.id)}><FaRegTrashAlt /></button></td>
                            </tr>))}   
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between pt-3">
                        <div className="d-flex">
                            <input class="form-control" type="text" placeholder="Cupon"/>
                            <button  className="btn btn-primary">Aplicar</button>
                        </div>
                        <button className="btn btn-danger ms-5" onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>

                <div className="d-flex flex-column resumen ">
                    <h4 className="text-center fw-bold">Resumen</h4>
                    <hr />
                    {carrito.map( (producto)=>(
                    <div className="d-flex justify-content-between" key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>${producto.precio*producto.cantidad}</p>
                    </div>))}
                    <hr />
                    <div className="d-flex justify-content-between pb-4">
                        <h5>Precio total: </h5>
                        <h5>${precioTotal()}</h5>
                    </div>
                    
                    <Link className="link-estilo btn btn-success colortextoblanco" to={"/Checkout"}>Comprar</Link>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Cart