import React, { useRef } from 'react';
import './announcement.scss';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/scss/navigation';
import chevLeft from '../../assets/icon/chev-left.svg';

export const Announcement = () => {
  const items = [
    {
      display: 'FREE STANDARD SHIPPING on Orders $150+',
      path: '/free-shipping',
    },
    {
      display: 'Our Ongoing Commitments',
      path: '/ongoing',
    },
  ];
  const preBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  return (
    <div className='announcement'>
      <div className='announcement-prev btn' ref={nextBtnRef}>
        <img src={chevLeft} alt='' />
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        navigation={{
          enabled: true,
          prevEl: preBtnRef.current,
          nextEl: nextBtnRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = preBtnRef.current;
          swiper.params.navigation.nextEl = nextBtnRef.current;
        }}
      >
        {items.map((ele, idx) => (
          <SwiperSlide key={idx}>
            <AnnounceItem title={ele.display} path={ele.path} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='announcement-next btn' ref={preBtnRef}>
        <img src={chevLeft} alt='' />
      </div>
    </div>
  );
};

const AnnounceItem = ({ title, path }) => {
  return (
    <div className='announce-item'>
      <span className='announce-title'>{title}</span>
      <Link to={path}>Learn more</Link>
    </div>
  );
};
