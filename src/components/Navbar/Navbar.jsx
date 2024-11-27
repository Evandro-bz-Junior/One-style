import './Navbar.scss'
import Hamburger from 'hamburger-react'


import logo from '../../imgs/logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Limpa o estilo ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const LinkClick = () => {
        setOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpen(false); // Fecha o menu caso seja um menu hambúrguer
        }
    };

    return (
        <nav className='navbar'>

            <div className='logo-area'>
                <Link to="/#home" onClick={LinkClick}><img src={logo} alt="logo" className='img-logo' /></Link>
            </div>


            <div className='links-area'>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li className='nav-link'><Link to="/#home" onClick={LinkClick}>Inicio</Link></li>
                    <li className='nav-link'><Link to="/#releases" onClick={LinkClick}>Lançamentos</Link></li>
                    <li className='nav-link'><Link to="/#products" onClick={LinkClick}>Produtos</Link></li>
                    <li className='nav-link'><Link to="/#about" onClick={LinkClick}>Sobre nòs</Link></li>
                    <li className='nav-link'><Link to="/#faq" onClick={LinkClick}>Duvidas</Link></li>
                    <li className='nav-link'><Link to="/#contact" onClick={LinkClick}>Contato</Link></li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={20}
                    direction="right"
                    color="#FCF9F9"
                    rounded />
            </div>

        </nav>
    );
}

export default Navbar;