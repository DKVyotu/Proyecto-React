import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import Cargando from "../Cargando/Cargando";
import Error404 from "../Error404/Error404";



const ItemDetailContainer = () => {
  const { idProducto } = useParams()
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError]= useState(false)

  const obtenerProducto = () => {
    setCargando(true);
    const productoDetallado = doc(db, "productos", idProducto)
      getDoc(productoDetallado)
        .then((respuesta)=> {
          const datos= {id: respuesta.id, ...respuesta.data()}
          setProducto(datos);
          Object.keys(datos).length < 8 ? (setError(true)) : setError(false);          
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


  useEffect(() => {
    obtenerProducto()
  }, [idProducto]);

  return (
    <>
      {/* Si no hay productos encontrados muestra el Error */}
        {error ? (<Error404 />) : (cargando ? <Cargando /> : <ItemDetail producto={producto}/>)}
    </>
  );
};

export default ItemDetailContainer;
