import { useState } from "react";

const BotonSwitch = () => {
    
  const [switch1, setSwitch1] = useState(true);

  const CambiarEstado = () => {
    setSwitch1(!switch1);
  };

  return (
    <>
      <p>Valor de Switch: {switch1.toString()}</p>
      <button className="btn btn-warning" onClick={CambiarEstado}>{switch1.toString()}</button>
    </>
  );
};

export default BotonSwitch;
