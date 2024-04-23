
import { ImCart } from "react-icons/im";


function CartWidget() {

  const mensaje = () => { alert("Estamos trabajando en la Web")}

  return (
    <div>
      <button type="button" onClick={mensaje} className="btn position-relative color1">
        <ImCart size={20} color="white" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
      </button>


    </div>
  )
}

export default CartWidget