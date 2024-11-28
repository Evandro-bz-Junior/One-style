import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


import './Footer.scss'

function Footer() {
    return (
        <footer>

            <div className="footer-column">

                <h4 id='logo-name'>One Style</h4>

                <span>Moda que Transforma.</span>

            </div>

            <div className="footer-column">
            <div className="social-links">
                    <h4>Contato e Redes Sociais</h4>
                    
                    <a href="https://wa.me/5584998098813" target="_blank"  rel="noopener noreferrer">
                    <IoLogoWhatsapp className="social-icon"/>Fale conosco: WhatsApp</a>

                    <a href="https://www.instagram.com/one.style_oficial" target="_blank" rel="noopener noreferrer"><FaInstagram  className="social-icon"/>Siga-nos no Instagram</a> 
                </div>
            </div>

            <div className="footer-column">

                <div className="links-area">
                    <h4>Links Úteis</h4>
                    <ul className="links">
                    <li className='link'><Link to="/#home">Inicio</Link></li>
                    <li className='link'><Link to="/#releases">Lançamentos</Link></li>
                    <li className='link'><Link to="/#products">Produtos</Link></li>
                    <li className='link'><Link to="/#about">Sobre nòs</Link></li>
                    <li className='link'><Link to="/#faq">Duvidas</Link></li>
                    </ul>
                </div>

            </div>


        </footer>
    );
}

export default Footer;