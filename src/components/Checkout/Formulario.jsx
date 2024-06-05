
const Formulario = ({formulario, guardarInput, enviarFormulario}) => {
  return (
    <div className="d-flex justify-content-center footerAbajo">

      <form onSubmit={enviarFormulario} className="contenedorContacto justify-content-center">

        <h3 className="text-center">Completa tu Orden</h3>

        <label>Nombre</label>
        <input className="form-control" type="text" name="nombre" value={formulario.nombre} onChange={guardarInput} required/>

        <label>Telefono</label>
        <input className="form-control" type="number" name="telefono" value={formulario.telefono} onChange={guardarInput} required/>

        <label>Correo Electronico</label>
        <input className="form-control" type="email" name="email" value={formulario.email} onChange={guardarInput} required/>

        <label>Confirmar Correo Electronico</label>
        <input className="form-control" type="email" name="confirmarEmail" value={formulario.confirmarEmail} onChange={guardarInput} required/>

        <div className="d-flex justify-content-center" >
        <button type="submit" className="botonComprar mt-4">Enviar pedido</button>
        </div>
      </form>

    </div>
  )
}

export default Formulario