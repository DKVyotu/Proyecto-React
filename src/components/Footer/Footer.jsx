import "./Footer.css";
import { Link } from 'react-router-dom';

import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import Logo from "../../assets/LogoFooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-between align-items-center py-4 container-xxl">
        <Link to="/">
          <img src={Logo} alt="Logo" width={100} />
        </Link>

        <ul className="d-flex flex-column align-items-center">
          <li>
            <Link className="colortexto1 texto14" to="/TerminosCondiciones">Terminos y Condiciones</Link>
          </li>
          <li>
            <Link className="colortexto1 texto14" to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
          </li>
        </ul>
        <ul className="d-flex flex-column align-items-center">
          <li>
            <a className="colortexto1 texto14" href="https://maps.app.goo.gl/wYrz4txPYHA5WXpz6" target="_blank">
              Visitanos
            </a>
          </li>
          <li>
            <Link className="colortexto1 texto14" to="/Contacto">Contacto</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              className="colortexto1 texto40"
              href="https://web.whatsapp.com/"
              target="_blank"
            >
              <FaWhatsappSquare />
            </a>
          </li>
          <li>
            <a
              className="colortexto1 texto40 ps-3"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              className="colortexto1 texto40 ps-3"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
