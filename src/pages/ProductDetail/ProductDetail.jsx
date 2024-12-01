
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import Navbar from '../../components/Navbar/Navbar';
import ContactButton from '../../components/ContactButton/ContactButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './ProductDetail.scss';


function ProductDetail() {


    const { id } = useParams();
    let product = productsData.find((p) => p.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!product) {
        const savedProduct = localStorage.getItem('selectedProduct');
        product = savedProduct ? JSON.parse(savedProduct) : null;
    }

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (



        <div >
            <Navbar />
            <div className="container">
                <div className="product-detail">
                    <div className="img-area">

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            speed={1500}
                            effect="fade"
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                        >
                            {product.image.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={product.title} className='product-imgs' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="detail-content">
                        <h1>{product.title}</h1>
                        <p>
                            {product.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <span className='product-price'>{product.price} {product.payment}</span>
                        <span>Consulte os tamanhos disponiveis</span>

                        {product.measurements ? (
                                        <table className="measurements-table">
                                            <thead>
                                                <tr>
                                                    <th>Medidas</th>
                                                    <th>P</th>
                                                    <th>M</th>
                                                    <th>G</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(product.measurements).map(([key, sizes]) => (
                                                    <tr key={key}>
                                                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                                        <td>{sizes.P}</td>
                                                        <td>{sizes.M}</td>
                                                        <td>{sizes.G}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>Medidas não disponíveis para este produto.</p>
                                    )}

                        <a href='#' className="btn-open-modal" onClick={() => setIsModalOpen(true)}>
                            Ver Tabela de Medidas
                        </a>
                        {isModalOpen && (
                            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                                <div
                                    className="modal-content"
                                    onClick={(e) => e.stopPropagation()} // Previne o fechamento ao clicar dentro do modal
                                >
                                    <div className="modal-header">
                                        <h3>Tabela de Medidas</h3>
                                        <button className="btn-close-modal" onClick={() => setIsModalOpen(false)}>
                                        <FaWindowClose />
                                        </button>
                                    </div>
                                    {product.measurements ? (
                                        <table className="measurements-table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Medidas</th>
                                                    <th>P</th>
                                                    <th>M</th>
                                                    <th>G</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(product.measurements).map(([key, sizes]) => (
                                                    <tr key={key}>
                                                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                                        <td>{sizes.P}</td>
                                                        <td>{sizes.M}</td>
                                                        <td>{sizes.G}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>Medidas não disponíveis para este produto.</p>
                                    )}
                                </div>
                            </div>
                        )}
                        <p>Gostou ou quer mais detalhes?</p>
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;