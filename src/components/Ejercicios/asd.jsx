
                        <tbody key={producto.id} className="d-flex align-items-center p-3 ">
                            <img src={producto.imagen} alt="" width={100}/>
                            <h2>{producto.nombre}</h2>
                            <h4>{producto.cantidad}</h4>
                            <h4> ${producto.precio}</h4>
                            <h5>${producto.precio*producto.cantidad}</h5>
                            <button className="btn btn-danger" onClick={()=> borrarProductoEspecifico(producto.id)}><FaRegTrashAlt /></button>
                        </tbody>