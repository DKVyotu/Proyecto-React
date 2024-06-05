import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js"
import Cargando from "../Cargando/Cargando.jsx";
import Error404 from "../Error404/Error404.jsx";


const ItemListContainer = () => {
  const [productosObtenidos, setProductosObtenidos] = useState([]);
  const { idCategoria } = useParams()
  const [cargando, setCargando] = useState(false)
  const [text, setText] = useState(true)
  const [error, setError]= useState(false)


  const obtenerProductos = () => {
    setCargando(true);
    setText(true);
    const productosFireBase = collection(db, "productos")
    getDocs(productosFireBase)
      .then ((respuesta)=> {
        const productosTransformados = respuesta.docs.map((productos)=> {
          return {id: productos.id, ...productos.data()}
        })
        setProductosObtenidos(productosTransformados);
        setCargando(false);
      }) 
      //Confirar una captura de error
      .catch      
  }

  const obtennerProductosCategoria = () => {
    setCargando(true);
    setText(false);
    const productosFireBase = collection(db, "productos")
    const consulta = query(productosFireBase, where("categoria","==",idCategoria))
    getDocs(consulta)
      .then ((respuesta)=> {
        const productosTransformados = respuesta.docs.map((productos)=> {
          return {id: productos.id, ...productos.data()}
        })
        setProductosObtenidos(productosTransformados);
        productosTransformados.length === 0 ? (setError(true)) : setError(false);
        console.log(productosTransformados.length)
        setCargando(false);
      })   
      //configurar una captura de error para mostar 
      .catch ((error)=> {
        console.error(error)
        console.log('Error al obtener el producto Catch')
      })
      .finally (()=> {
        setCargando(false)
        console.log("Detail Finally")
      })

  }
  
  useEffect (() => {
    if (idCategoria) {
      obtennerProductosCategoria()   
    } else {
      obtenerProductos()
    }
  }, [idCategoria])
 

  return (
    <>
      {/* Si no hay productos encontrados muestra el Error */}
      {error ? 
        (<Error404/>) : 
        (<div className="container-xxl my-5 footerAbajo">
            {cargando ? 
              (<Cargando/>) :
              (<>
                {text ? (<h1 className="text-center">Todos los Productos</h1>) : (<h2 className="text-center">Categoria: {idCategoria}</h2>)}
                <div className="d-flex justify-content-center flex-wrap">
                  {productosObtenidos.map((producto) => (<Item key={producto.id} producto={producto}/>))}
                </div>
              </>)
            }
        </div>)
      }      
    </>
  );
};

export default ItemListContainer;
