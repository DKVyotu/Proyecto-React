import BotonSwitch from "../Ejercicios/BotonSwitch";
import Contador from "../Ejercicios/Contador";
import LlamadaApi from "../Ejercicios/LlamadaApi";
import Productos from "../Cards/Productos";



function ItemListContainer() {

  LlamadaApi();

  return (
    <div className="container-xxl d-flex flex-column align-items-center my-5">
      <Productos />
      <BotonSwitch />
      <Contador stock='3' />
    </div>
  );
}

export default ItemListContainer;
