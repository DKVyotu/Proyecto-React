import { Link } from 'react-router-dom'
import ImagenCTA from '../../assets/imagenVinos.jpg'


const Home = () => {
  return (
    <div className="footerAbajo">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column align-self-center px-5">
          <h2 className='pb-5'>Un CTA llamativo...</h2>
          <Link to={"/Productos"} class="btn btn-warning align-self-center">Ver mas...</Link>
        </div>
        <img src={ImagenCTA} alt="" width={500}/>
      </div>
    </div>
  )
}

export default Home