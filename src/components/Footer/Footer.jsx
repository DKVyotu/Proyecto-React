import "./Footer.css";

import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import Logo from "../../assets/LogoFooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-between align-items-center py-4 container-xxl">
        <a href="#">
          <img src={Logo} alt="Logo" width={100} />
        </a>

        <ul className="d-flex flex-column align-items-center">
          <li>
            <a className="colortexto1 texto14" href="#">
              Terminos y Condiciones
            </a>
          </li>
          <li>
            <a className="colortexto1 texto14" href="#">
              Preguntas Frecuentes
            </a>
          </li>
        </ul>
        <ul className="d-flex flex-column align-items-center">
          <li>
            <a className="colortexto1 texto14" href="https://maps.app.goo.gl/wYrz4txPYHA5WXpz6" target="_blank">
              Visitanos
            </a>
          </li>
          <li>
            <a className="colortexto1 texto14" href="#">
              Contacto
            </a>
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
