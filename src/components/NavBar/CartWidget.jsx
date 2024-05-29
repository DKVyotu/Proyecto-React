import { FaBasketShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {

  const {cantidadCarrito} = useContext(CartContext)

  return (
    <>
      <button type="button" className="btn position-relative color1">
        <FaBasketShopping size={20} color="white" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantidadCarrito()}</span>
      </button>
    </>

  )
}

export default CartWidget