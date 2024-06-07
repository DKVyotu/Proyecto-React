import { InfinitySpin } from "react-loader-spinner"

const Error404 = () => {

  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-center footerAbajo">
      
      <h1>Error 404</h1>
      <h2>Página no encontrada</h2>
      <div><InfinitySpin color="#903845" width={200}/></div>

    </div>
  )
}

export default Error404