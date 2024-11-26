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
                    Somos uma marca autoral com fabricação própria, focada em moda feminina casual chique, contemporânea e atemporal, com uma pitada de sofisticação, uma marca cheia de cores, flores e elegância.
                </span>
                <span  >
                    O propósito da nossa marca é transformar a vida das mulheres através da moda. Sabemos que muitas mulheres não conseguem enxergar sua própria beleza, e acreditamos que a moda, por meio das roupas, tem um potencial único para impulsionar a autoestima, queremos ver mulheres com autoestima e autoconfiança inabaláveis.
                </span>
            </div>

            <div className="about-img">
                <img src={aboutImg} alt="aboutImg" />
            </div>
        </div>
    );
}

export default About;