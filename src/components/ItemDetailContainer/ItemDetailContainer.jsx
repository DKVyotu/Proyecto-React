import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import Cargando from "../Cargando/Cargando";



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams()
  const [cargando, setCargando] = useState(false);

  const obtenerProducto = () => {
    setCargando(true);
    const productoDetallado = doc(db, "productos", idProducto)
      getDoc(productoDetallado)
        .then((respuesta)=> {
          const datos= {id: respuesta.id, ...respuesta.data()}
          setProducto(datos);
          setCargando(false);
        })
        //configurar una captura de error para mostar 
        .catch ((error)=> {
          console.error(error)
          console.log('carch')
        })
        .finally (()=> {
          setCargando(false)
          console.log("finaklu")
        })
  }


  useEffect(() => {
    obtenerProducto()
  }, [idProducto]);

  return (
  <>
    {cargando ? <Cargando /> : <ItemDetail producto={producto}/>}
  </>
  );
};

export default ItemDetailContainer;
