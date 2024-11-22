import aboutImg from '../../imgs/aboutImg.png'

import './About.scss';

function About() {
    return (
        <div className='about'>

            <div className="about-title">
                <hr />
                <h1>Sobre</h1>
                <hr />
            </div>

            <div className="about-info">
                <div className="about-subtitle">
                    <h4>Acreditamos que a moda pode transformar vidas.</h4>
                </div>

                <span  >
                    A One Style nasceu da paixão pela moda e do desejo de criar peças que não apenas vestem, mas transformam. Nossa missão é oferecer roupas de alta qualidade que permitam às pessoas expressar sua individualidade e estilo único. Valorizamos a sustentabilidade, a inovação e o compromisso com nossos clientes, garantindo sempre a melhor experiência de compra.
                </span>
            </div>

            <div className="about-img">
                <img src={aboutImg} alt="aboutImg" />
            </div>
        </div>
    );
}

export default About;