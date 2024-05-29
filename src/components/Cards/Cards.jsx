import { useEffect, useState } from "react";
// import ProductosDB from "../../data/Productos.js";
import CardProducto from "./CardProducto";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js"


const Cards = () => {
  const [productosObtenidos, setProductosObtenidos] = useState([]);
  const [cargando, setCargando] = useState(false)
  const [text, setText] = useState(true)
  const { idCategoria } = useParams()


  const obtenerProductos = () => {
    const productosFireBase = collection(db, "productos")
    getDocs(productosFireBase)
      .then ((respuesta)=> {
        const productosTransformados = respuesta.docs.map((productos)=> {
          return {id: productos.id, ...productos.data()}
        })
        setProductosObtenidos(productosTransformados)
      })      
  }

  const obtennerProductosCategoria = () => {
    const productosFireBase = collection(db, "productos")
    const consulta = query(productosFireBase, where("categoria","==",idCategoria))
    getDocs(consulta)
      .then ((respuesta)=> {
        const productosTransformados = respuesta.docs.map((productos)=> {
          return {id: productos.id, ...productos.data()}
        })
        setProductosObtenidos(productosTransformados)
      })  
  }
  
  useEffect (() => {
    if (idCategoria) {
      obtennerProductosCategoria()   
    } else {
      obtenerProductos()
    }
  }, [idCategoria])



/*   useEffect(() => {
    //Mostramos pantalla de cargando en lo llega la informacion
    setCargando(true)
    ProductosDB()
    .then((respuesta) => {
      if (idCategoria) {
        //Filtra los productos por categoria
        const productofiltrado = respuesta.filter ( (resp)=> resp.categoria === idCategoria)
        setProductosObtenidos(productofiltrado)
        setText(false)
      } else {
        //No filtra ninguna categoria y pasa el array completo
        setProductosObtenidos(respuesta);
        setText(true)
      }
    })
    .catch((error) => {
      console.log("Error en la obtencion de Productos en Local"+ error)
    })
    .finally(()=> {
      //Quitamos la pantalla de carga
      setCargando(false)
    });
  }, [idCategoria]);
 */

  

  return (
    // Contenedor de Cards
    <div>
      {/*  Alternar entre el  TEXTO de Productos y Categoria  */}
      {text ? <h1 className="text-center">Productos</h1> : <h2>Categoria: {idCategoria}</h2>}

      <div className="d-flex flex-wrap justify-content-center m-4">
        {
          cargando ? <div>Cargando Papi....</div> : productosObtenidos.map((producto) => (<CardProducto key={producto.id} producto={producto}/>))
        }
      </div>
    </div>
  );
};

export default Cards;
