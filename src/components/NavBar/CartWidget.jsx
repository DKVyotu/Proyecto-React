
import { FaBasketShopping } from "react-icons/fa6";


function CartWidget() {

  const mensaje = () => { alert("Estamos trabajando en la Web") }

  return (
    <>
      <button type="button" onClick={mensaje} className="btn position-relative color1">
        <FaBasketShopping size={20} color="white" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
      </button>
    </>

  )
}

export default CartWidget