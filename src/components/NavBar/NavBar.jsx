import './NavBar.css';

import Logo from '../../assets/Baner.png'

import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header>
            <div className='d-flex justify-content-between align-items-center py-4 container-xxl'>
                <a href="#"><img className='LogoNavBar' src={Logo} alt="Logo" width={200} /></a>
                <ul className=''>
                    <li><a className='colortexto1 texto24 px-3' href="#">Home</a></li>
                    <li><a className='colortexto1 texto24 px-3' href="#">Tienda</a></li>
                    <li><a className='colortexto1 texto24 px-3' href="#">Nuestros vinos</a></li>
                    <li><a className='colortexto1 texto24 px-3' href="#">Origen</a></li>
                </ul>
                <a href="#"><CartWidget /></a>
            </div>
        </header>
    )
}

export default NavBar;