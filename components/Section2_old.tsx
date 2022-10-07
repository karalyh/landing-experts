import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';

export default function Section2() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
    <Image
              src="/images/Rectangle-2.png"
              alt="Rectangle-2.png"
              width={701}
              height={742}
            />;
    </SwiperSlide>
    <SwiperSlide>
    <Image
              src="/images/Rectangle-2.png"
              alt="Rectangle-2.png"
              width={701}
              height={742}
            />; 

    </SwiperSlide>
    <SwiperSlide>
    <Image
              src="/images/Rectangle-2.png"
              alt="Rectangle-2.png"
              width={701}
              height={742}
            />;
    </SwiperSlide>
    <SwiperSlide></SwiperSlide>
    ...
  </Swiper>
  );
};
