import './NavBar.css';

import Logo from '../assets/Logo.svg'

import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <>
        <nav>
            <a href="#"><img src={Logo} alt="Logo" width={150}/></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="https://www.tienda.com" target="_blank">Tienda</a></li>
                <li><a href="#">Nuestros vinos</a></li>
                <li><a href="#">Origen</a></li>
            </ul>
            <a href=""><CartWidget /></a>
        </nav>
        </>
    )
}

export default NavBar;