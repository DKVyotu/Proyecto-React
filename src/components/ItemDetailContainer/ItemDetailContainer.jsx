import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams()
  
  const obtenerProducto = () => {
    const productoDetallado = doc(db, "productos", idProducto)
    getDoc(productoDetallado)
      .then((respuesta)=> {
        const datos= {id: respuesta.id, ...respuesta.data()}
        setProducto(datos)
      })
      .catch
  }


  useEffect(() => {
    obtenerProducto()
  }, [idProducto]);

  return (<ItemDetail producto={producto}/>
  );
};

export default ItemDetailContainer;
