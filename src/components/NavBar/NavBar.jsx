import './NavBar.css';
import Logo from '../../assets/Baner.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <div className='d-flex justify-content-between align-items-center py-4 container-xxl'>
                <Link to="/"><img className='LogoNavBar' src={Logo} alt="Logo" width={200} /></Link>
                <ul className='d-flex'>
                    <Link className='colortexto1 texto24 px-3' to="/">Home</Link>
                    <div className="dropdown">
                     <button className="nav-link colortexto1 texto24 px-3" data-bs-toggle="dropdown">
                       Productos
                     </button>
                     <ul className=" dropdown-menu">
                        <Link className='colortexto1 texto24 px-3' to="/Productos">Todos</Link>
                        <Link className='colortexto1 texto24 px-3' to="/Categoria/Piscos">Piscos</Link>
                        <Link className='colortexto1 texto24 px-3' to="/Categoria/Vinos">Vinos</Link>
                        <Link className='colortexto1 texto24 px-3' to="/Categoria/Macerados">Macerados</Link>
                     </ul>
                    </div>
                    {/* <Link className='colortexto1 texto24 px-3' to="/Categoria/Piscos">Piscos</Link>
                    <Link className='colortexto1 texto24 px-3' to="/Categoria/Vinos">Vinos</Link>
                    <Link className='colortexto1 texto24 px-3' to="/Categoria/Macerados">Macerados</Link> */}
                    <Link className='colortexto1 texto24 px-3' to="/Origen">Origen</Link>
                </ul>
                <a href="#"><CartWidget /></a>
            </div>
        </header>
    )
}

export default NavBar;