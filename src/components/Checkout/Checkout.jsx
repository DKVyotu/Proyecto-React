import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import Formulario from "./Formulario"
import PantallaConfirmacion from "./PantallaConfirmacion.jsx"
import { addDoc, collection, doc, setDoc} from "firebase/firestore"
import db from "../../db/db.js"


const Checkout = () => {
  
  const {carrito, vaciarCarrito, precioTotal} = useContext(CartContext)
  const [idPedido, setIdPedido] = useState(null)
  const [fechalog, setFechalog] = useState(null)

  const [formulario, setFormulario] =useState({
    // plantilla para el formulario
    nombre: "",
    telefono: "",
    email: "",
  })

  const guardarInput = (event) => {
    //                                        nombre :  valor dentro del formulario nombre
    setFormulario({...formulario, [event.target.name]: event.target.value})
  }

  const enviarFormulario =(event) =>{
    event.preventDefault()   

    const pedido = {
      comprador: {...formulario},
      productos: {...carrito},
      fecha: new Date(),
      total: precioTotal()
    }
    subirOrden(pedido)
  }

  const subirOrden = (pedido) => {
    
    // Manejo de db
    const refe = collection(db, "ordenes")
    addDoc(refe, pedido)
      .then((respuesta) => {   
        setIdPedido(respuesta.id)
        setFechalog(pedido.fecha.toLocaleString())  
        console.log("Todo bien papi sigue asi")
      })
      .finally(()=>{
        //Reducir stock
        reducirStock()
        vaciarCarrito()
      })
  }

  const reducirStock = () => {
    carrito.map((producto) => {
      let cantidad = producto.cantidad
      // eliminamos cantidad para que no lo agregue a nuestr DB
      delete producto.cantidad

      const acca = doc(db, "productos",  producto.id)
      setDoc(acca, {...producto, stock: producto.stock - cantidad})
       .then(()=> console.log("Se redujo el Stock") )
    })
  }

  return (
    <> 
      {(idPedido 
          ? 
          (<PantallaConfirmacion fecha={fechalog} id={idPedido}/>) 
          : 
          (<Formulario formulario={formulario} guardarInput={guardarInput} enviarFormulario={enviarFormulario}/>)
      )}
    </>
  )
}

export default Checkout