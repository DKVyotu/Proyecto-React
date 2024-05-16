const ItemDetail = ({producto}) => {
  return (
    <div>
      <div>
        <h1></h1>
        <p>{producto.nombre}</p>
        <p>{producto.descripcion}</p>
        <p>{producto.variedad}</p>
        <p>{producto.id}</p>
        <img src={producto.imagen} alt="" />
        <p>{producto.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
