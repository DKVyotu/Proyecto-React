import { useEffect } from "react";


const LlamadaApi = () => {
  useEffect(() => {
    const ConsumoApi = () => {
      fetch("https://fakestoreapi.com/products")
        .then((respuesta) => respuesta.json())
        .then((datos) => console.log(datos));
    };
    ConsumoApi();
  }, []);

  return
};

export default LlamadaApi;
