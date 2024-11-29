import { RiInstagramFill } from "react-icons/ri";
import './CtaInstagram.scss'

function CtaInstagram() {
    return (
        <div>
            <a href="https://www.instagram.com/one.style_oficial" target="_blank" rel="noopener noreferrer" className="btn-insta">
                <button className="btn">
                <RiInstagramFill className='insta-logo' /> Siga-nos
                </button>
            </a>
        </div>
    );
}

export default CtaInstagram;