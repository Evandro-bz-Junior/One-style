import productsData from '../../data/productsData';
import { useNavigate } from 'react-router-dom'; 

import './Releases.scss'


function Releases() {
    const navigate = useNavigate();

    const release1 = productsData.find(product => product.title === "Conjunto Beatriz");
    const release2 = productsData.find(product => product.title === "Vestido Louise");
    const release3 = productsData.find(product => product.title === "Conjunto Noémia");

    return (
        <div className='releases'>

            <div className="releases-title">
                <hr />
                <h1>Lançamentos</h1>
                <hr />
            </div>

            <div className="releases-subtitle">
                <h4>Confira as últimas novidades que acabaram de chegar na One Style!</h4>
            </div>

            <div className="releases-items">

                <div className="releases-item item1 "onClick={() => navigate(`/product/${release1.id}`)}>
                    <img src={release1.image[0]} alt={release1.title} />
                    <div className="item-info">
                        <h4>{release1.title}</h4>
                        <span>{release1.price} {release1.payment}</span>

                    </div>
                </div>

                <div className="releases-item item2" onClick={() => navigate(`/product/${release2.id}`)}>
                    <img src={release2.image[0]} alt={release2.title} />
                    <div className="item-info">
                        <h4>{release2.title}</h4>
                        <span>{release2.price} {release2.payment}</span>
                    </div>

                </div>

                <div className="releases-item item3" onClick={() => navigate(`/product/${release3.id}`)}>
                    <img src={release3.image[0]} alt={release3.title} />
                    <div className="item-info">
                        <h4>{release3.title}</h4>
                        <span>{release3.price} {release3.payment}</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Releases;