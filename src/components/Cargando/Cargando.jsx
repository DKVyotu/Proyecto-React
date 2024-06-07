import { BallTriangle } from "react-loader-spinner"

const Cargando = () => {
  
  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-center footerAbajo">
       
       <h2>Cargando . . .</h2>
       <div><BallTriangle color="#903845" height={200} width={200}/></div>
        
    </div>
  )
}

export default Cargando