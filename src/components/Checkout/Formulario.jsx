
const Formulario = ({formulario, guardarInput, enviarFormulario}) => {
  return (
    <div className="d-flex justify-content-center footerAbajo">

      <form onSubmit={enviarFormulario} className="contenedorContacto">
        <label>Nombre</label>
        <input type="text" name="nombre" value={formulario.nombre} onChange={guardarInput}/>

        <label>Telefono</label>
        <input type="number" name="telefono" value={formulario.telefono} onChange={guardarInput}/>

        <label>Correo Electronico</label>
        <input type="email" name="email" value={formulario.email} onChange={guardarInput}/>

        <button type="submit" className="mt-4">Enviar pedido</button>
      </form>

    </div>
  )
}

export default Formulario