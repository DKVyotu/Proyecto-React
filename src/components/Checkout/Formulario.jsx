
const Formulario = ({formulario, guardarInput, enviarFormulario}) => {
  return (
    <div className="d-flex justify-content-center footerAbajo">

    <form onSubmit={enviarFormulario} className="contenedorContacto justify-content-center p-4 rounded shadow-lg">
      <h3 className="text-center mb-4">Completa tu Orden</h3>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input className="form-control" type="text" name="nombre" value={formulario.nombre} onChange={guardarInput}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input className="form-control" type="number" name="telefono" value={formulario.telefono} onChange={guardarInput}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input className="form-control" type="email" name="email" value={formulario.email} onChange={guardarInput}  />
      </div>

      <div className="mb-3">
        <label className="form-label">Confirmar Correo Electrónico</label>
        <input className="form-control" type="email" name="confirmarEmail" value={formulario.confirmarEmail} onChange={guardarInput}  />
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="botonComprar mt-4">Enviar Pedido</button>
      </div>
    </form>
    

    </div>
  )
}

export default Formulario