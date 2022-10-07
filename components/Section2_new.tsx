import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import "swiper/css/zoom";

// Import Swiper styles
import 'swiper/css';

export default function Section2() {
    return (
        <Swiper

            // install Swiper modules
            // autoHeight={true}
            zoom={true}

            modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};
