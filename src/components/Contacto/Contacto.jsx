import "./Contacto.css";
import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("")

  const guardarNombre = (event) => {
    setNombre(event.target.value)
  }
  const guardarCorreo = (event) => { 
    setCorreo(event.target.value)
  }
  const guardarComentario = (event) => {
    setComentario(event.target.value)
  }

  const EnviarFormulario = (event) => {
    event.preventDefault()
    const enviados = {nombre, correo, comentario}
    console.log(enviados)
    
  };

  return (
    <div className="footerAbajo d-flex justify-content-center">

      <form onSubmit={EnviarFormulario} className="contenedorContacto">
        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={guardarNombre}/>

        <label htmlFor="">Correo Electronico</label>
        <input type="email" value={correo} onChange={guardarCorreo}/>

        <label htmlFor="">Comentanos:</label>
        <textarea name="" id=""value={comentario} onChange={guardarComentario} ></textarea>

        <button type="submit" className="mt-4">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
