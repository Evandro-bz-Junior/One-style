
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import Navbar from '../../components/Navbar/Navbar';
import ContactButton from '../../components/ContactButton/ContactButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './ProductDetail.scss';
import React from 'react';

function ProductDetail() {


    const { id } = useParams();
    let product = productsData.find((p) => p.id === id);

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
                                    <img src={image} alt={product.title} className='product-imgs'/>
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
                        <p>Gostou ou quer mais detalhes?</p>
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;