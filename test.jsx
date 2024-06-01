
{error ? (
  <Error404 />
) : (
  <div className="container-xxl d-flex justify-content-center align-items-center flex-wrap my-5 footerAbajo">
    {cargando ? (
      <Cargando />
    ) : (
      <>
        {text ? (
          <h1 className="text-center">Todos los Productos</h1>
        ) : (
          <h2 className="text-center">Categoria: {idCategoria}</h2>
        )}
        <div>
          {productosObtenidos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      </>
    )}
  </div>
)}