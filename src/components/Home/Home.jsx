import { Link } from 'react-router-dom'
import ImagenCTA from '../../assets/imagenVinos.jpg'


const Home = () => {
  return (
    <div className="footerAbajo">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column align-self-center px-5">
          <h2 className='pt-5 text-center'>Un texto llamativo</h2>
          <h2 className='pb-5 '>que incite a la compra</h2>
          <Link to={"/Productos"} className="btn btn-warning align-self-center">Ver mas...</Link>
        </div>
        <img src={ImagenCTA} alt="" width={500}/>
      </div>
      <div className="d-flex justify-content-center flex-column" >
        <div className='d-flex justify-content-center m-5'>
          <img className='m-3' src="https://acortar.link/wDIcqY" alt="" width={150} />
          <img className='m-3' src="https://acortar.link/wDIcqY" alt="" width={150} />
          <img className='m-3' src="https://acortar.link/wDIcqY" alt="" width={150} />
          <img className='m-3' src="https://acortar.link/wDIcqY" alt="" width={150} />
        
        </div>
        <Link to={"/Productos"} className="btn btn-warning align-self-center">Ver mas...</Link>
      </div>
    </div>
  )
}

export default Home