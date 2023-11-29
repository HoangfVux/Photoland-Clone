import React from 'react';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css'

import { Pagination, Navigation } from 'swiper'
//Component
import Product from '../components/Product';


const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30
        },
      }}
      pagination={{
        clickable: true,
      }}
      className='mainSlider mx-auto max-w-[600px] md:max-w-lg xl:max-w-[1410px]'
    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          )
        })}
      </>
    </Swiper>
  )
};

export default ProductSlider;