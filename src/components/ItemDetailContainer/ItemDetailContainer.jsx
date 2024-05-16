import { useEffect, useState } from "react";
import ObtenerProductos from "../../data/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams()
  
  useEffect(() => {
    ObtenerProductos()
    .then((respuesta) => {
      const productobuscador = respuesta.find(
          (productoencontrado) => productoencontrado.id === idProducto
        );
        setProducto(productobuscador);
      })
      .catch((error) => {
        console.error(error); 
      });
  }, []);

  return (<ItemDetail producto={producto}/>
  );
};

export default ItemDetailContainer;
