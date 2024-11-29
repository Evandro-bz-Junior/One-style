import homeBanner1 from '../../imgs/homeBanner1.jpeg'
import homeBanner2Img1 from '@imgs/homebanner2-img1.jpeg'
import homeBanner2Img2 from '@imgs/homebanner2-img2.jpeg'
import homeBanner2Img3 from '@imgs/homebanner2-img3.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import ContactButton from "../ContactButton/ContactButton";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HomeBanner.scss';


function HomeBanner() {
    return (
        <>

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
                <SwiperSlide>

                    <div className='home-banner'>

                        <div className="info-area">
                            <h1 className="title">Moda que Transforma </h1>
                            <span>Descubra sua melhor versão
                                com nossas peças exclusivas.</span>
                            <ContactButton />

                        </div>

                        <div className="img-area">
                            <img src={homeBanner1} alt="banner-img" />
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='home-banner2'>

                        <div className="info-area">
                            <h1 className="title">Seja uma mulher com autoestima inabalável</h1>
                            <span>15% off para primeira compra.</span> 
                            <ContactButton />

                        </div>

                        <div className="img-area">
                            <img src={homeBanner2Img1} alt="banner-img" />
                            <img src={homeBanner2Img2} alt="banner-img" />
                            <img src={homeBanner2Img3} alt="banner-img" />
                        </div>

                    </div>

                </SwiperSlide>

            </Swiper>




        </>
    );
}

export default HomeBanner;