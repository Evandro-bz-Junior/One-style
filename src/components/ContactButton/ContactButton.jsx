import { IoLogoWhatsapp } from "react-icons/io";
import './ContactButton.scss'

function ContactButton() {
    return (
        <div>
            <a href="https://wa.me/558498098813" target="_blank" rel="noopener noreferrer" className="btn-link">
                <button className="btn">
                    <IoLogoWhatsapp className='whats-logo' /> Entre em Contato
                </button>
            </a>
        </div>
    );
}

export default ContactButton;