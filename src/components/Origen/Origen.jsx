import FotoOrigen from "../../assets/FotoOrigen.png";
import Divisor from "../../assets/Divisor.png";

const Origen = () => {
  return (
    <div className="container-xxl">
      <div className="d-flex flex-column align-items-center">
        <img
          className="py-4"
          src={FotoOrigen}
          alt="Foto del Fundador Tomas José Salas Alarcón"
          width={250}
        />
        <h4 className="mt-4">Tomas José Salas Alarcón</h4>
        <h5 className="mb-4">Fundador</h5>
        <div className="max800 justificado">
          <p>
            En el año de 1990, Don Tomas José Salas Alarcón guiado por el sueño
            donde su padre desde el cielo le dice que cultive vid, inicia la
            bodega con la siembra de tan solo 50 plantas de uva, unas cubas y
            zarandas de madera confeccionadas por sus propias manos como buen
            carpintero, elaborando así sus primeros productos derivados de la
            uva. Surge luego el nombre "El Mocho" que es el apodo con que se les
            conocía a su padre, abuelo y bisabuelo porque fueron los primeros
            agricultores de Estuquiña en criar ganado vacuno sin cuernos o vacas
            mochas.
          </p>

          <p>
            Ahora la familia de Don Tomas Salas Alarcón de la tierra del fundo
            "El Cuadrante" toma la savia de las cepas y la procesa obteniendo
            selectos y delicados productos los cuales son ganadores de premios a
            nivel regional, nacional e internacional y los brinda para deleite
            de los paladares más exigentes de Moquegua el Perú y del mundo.
          </p>
        </div>
        <img className="my-4" src={Divisor} alt="" width={400} />
      </div>
    </div>
  );
};

export default Origen;
