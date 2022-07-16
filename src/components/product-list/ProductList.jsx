import React, { useRef } from 'react';
import './productList.scss';
import { ProductCard } from '../product-card/ProductCard';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import chevLef from '../../assets/icon/chev-left.svg';
import { Link } from 'react-router-dom';

export const ProductList = ({ list }) => {
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  return (
    <div className='product-list'>
      {(list.intro || list.title) &&
        (() => (
          <div className='product-list-title'>
            <h3 className='product-list-heading-intro'>{list.intro}</h3>
            <span className='product-list-trailing-btn'>
              <Link to={list.list_path}>{`Shop ${list.title}`}</Link>
            </span>
          </div>
        ))()}
      <div className='product-list-container'>
        <div className='product-btn prev' ref={prevBtnRef}>
          <img src={chevLef} alt='' />
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={5}
          slidesPerGroup={5}
          speed={1000}
          navigation={{
            enabled: true,
            prevEl: prevBtnRef.current,
            nextEl: nextBtnRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevBtnRef.current;
            swiper.params.navigation.nextEl = nextBtnRef.current;
            swiper.params.navigation.disabledClass = 'is-end';
          }}
        >
          {list.slide?.map &&
            list.slide.map((ele, idx) => (
              <SwiperSlide key={`product-card-${idx}`}>
                <ProductCard cardItem={ele} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='product-btn next' ref={nextBtnRef}>
          <img src={chevLef} alt='' />
        </div>
      </div>
    </div>
  );
};
