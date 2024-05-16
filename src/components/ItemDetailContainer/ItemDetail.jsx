import CardContador from "../Cards/CardContador";

const ItemDetail = ({ producto }) => {
  return (
    <div className="d-flex justify-content-center p-4">
      <img className="impProductoGrande" src={producto.imagen} alt="" />
      <div className="ms-3">
        <h1 className="d-flex justify-content-center">{producto.nombre}</h1>
        <div className="py-4">
          <p>Presentacion: {producto.descripcion}</p>
          <p>Variedad: {producto.variedad}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
        </div>
        <CardContador stock={producto.stock}/>
      </div>
    </div>
  );
};

export default ItemDetail;
