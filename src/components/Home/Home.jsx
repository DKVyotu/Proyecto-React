import { Link } from 'react-router-dom'
import ImagenCTA from '../../assets/imagenVinos.jpg'
import Cargando from '../Cargando/Cargando'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../db/db'
import { useState, useEffect } from 'react'
import Item from "./Item.jsx";


const Home = () => {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false)


  const productosHome = () => {
    setCargando(true);
    const productosFireBase = collection(db, "productos")
    getDocs(productosFireBase)
      .then ((respuesta)=> {
        const productosListos = respuesta.docs.map((productos)=> {
          return {id: productos.id, ...productos.data()}
        })
        setProductos(productosListos);
        setCargando(false); 
      }
    )
  }

  useEffect (() => {
    productosHome()
  }, [])

  return (
    <div className="container-xxl footerAbajo">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column align-self-center px-5">
          <h2 className='pt-5 text-center'>Un texto llamativo</h2>
          <h2 className='pb-5 '>que incite a la compra</h2>
          <Link to={"/Productos"} className="btn btn-warning align-self-center">Ver mas...</Link>
        </div>
        <img src={ImagenCTA} alt="" width={500}/>
      </div>
      <div className="d-flex justify-content-center flex-column " >
        <div className='d-flex justify-content-center flex-wrap m-5 container-xxl '>
          {cargando ? 
            (<Cargando />) 
            : 
            (productos
              .filter(producto => producto.stock > 0)
              .slice(0, 6)
              .map(producto => (
                <Item key={producto.id} producto={producto} />
              )))
          }
       </div>
        <Link to={"/Productos"} className="btn btn-warning align-self-center mb-5">Ver mas...</Link>
      </div>
    </div>
  )
}

export default Home