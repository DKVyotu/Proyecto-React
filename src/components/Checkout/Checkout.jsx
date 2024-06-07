import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import Formulario from "./Formulario"
import validarFormulario from "../../Utils/Validacion.js"
import PantallaConfirmacion from "./PantallaConfirmacion.jsx"
import { addDoc, collection, doc, setDoc} from "firebase/firestore"
import { toast } from "react-toastify"; 
import db from "../../db/db.js"
import Cargando from "../Cargando/Cargando.jsx"


const Checkout = () => {
  
  const {carrito, vaciarCarrito, precioTotal} = useContext(CartContext)
  const [idPedido, setIdPedido] = useState(null)
  const [fechalog, setFechalog] = useState(null)
  const [cargando, setCagando] = useState(false)

  const [formulario, setFormulario] =useState({
    // plantilla para el formulario
    nombre: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
    //Se agrega el carrito al formulario para la validacion
    carrito: carrito
  })


  const guardarInput = (event) => {
    //                                        nombre :  valor dentro del formulario nombre
    setFormulario({...formulario, [event.target.name]: event.target.value})
  }

  const enviarFormulario =async(event) =>{
    event.preventDefault()   

    // Eliminamos confirmarEmail y el carrito para no enviarlo a la db
    const { confirmarEmail, carrito, ...formularioSinConfirmarEmailNiCarrito } = formulario;

    const pedido = {
      comprador: formularioSinConfirmarEmailNiCarrito,
      productos: {...carrito},
      fecha: new Date(),
      total: precioTotal()
    }

    try{
      //Validar Formulario
      const rsp = await validarFormulario(formulario)
      if (rsp.status === "Exito") {
        subirOrden(pedido)
        setCagando(true)
        toast.success("Su orden de completo con exito");
      } else {
        toast.warning(rsp.message);
      }
    }
    catch (error) {
      console.log(error + "error catch en enviarFormulario")
    }
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
          (cargando ? <Cargando/> :
          <Formulario formulario={formulario} guardarInput={guardarInput} enviarFormulario={enviarFormulario}/>)
      )}
    </>
  )
}

export default Checkout