import React, { useState, useRef, useEffect } from 'react';
import './quickShopModal.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import modalData from '../../data/modalData';
import chevLef from '../../assets/icon/chev-left.svg';
import { Navigation } from 'swiper';
import cross from '../../assets/icon/cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveModal } from '../../app/slices/activeModal';
import useMediaQuery from '../../hooks/useMediaQuery';

export const QuickShopModal = () => {
  const activeModal = useSelector((state) => state.activeModal.value);
  const dispatch = useDispatch();
  const sizeArr = ['XS', 'S', 'M', 'L', 'XL'];
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [modalColor, setModalColor] = useState(modalData.color[0]);
  const handleColor = (colorId) => {
    setModalColor((state) =>
      modalData.color[colorId] ? modalData.color[colorId] : state,
    );
  };
  const closeModal = (event) => {
    dispatch(changeActiveModal(false));
  };
  const matchMedium = useMediaQuery('(max-width: 1080px)');

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add('prevent-body-scroll');
    } else document.body.classList.remove('prevent-body-scroll');
  }, [activeModal, matchMedium]);
  return (
    <div className={`modal ${activeModal ? 'active' : ''}`}>
      <div className='modal-container'>
        <div className='modal-content'>
          <div className='modal-slider'>
            <div className='modal-slider-btn prev' ref={prevBtnRef}>
              <img src={chevLef} alt='' />
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
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
              {modalColor?.image?.map &&
                modalColor.image.map((slide, idx) => (
                  <SwiperSlide key={`modal-slide-${idx}`}>
                    <div
                      className='modal-slide'
                      style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className='modal-slider-btn next' ref={nextBtnRef}>
              <img src={chevLef} alt='' />
            </div>
          </div>
          <div className='modal-info'>
            <h2 className='modal-title'>{modalData.title}</h2>
            <div className='modal-price'>
              <span>{modalData.price}</span>
            </div>
            <div className='modal-info-divider'></div>
            <div className='modal-color'>
              <div className='color-name'>
                <span>{`Color: ${modalColor.name}`}</span>
              </div>
              <div className='color-thumb'>
                {modalData.color?.map &&
                  modalData.color.map((color, idx) => (
                    <span
                      key={`modal-color-thumb-${idx}`}
                      className={
                        modalColor.colorId === idx ? 'modal-color-active' : ''
                      }
                      onClick={() => {
                        handleColor(idx);
                      }}
                    >
                      <img src={color.colorThumb} alt='' />
                    </span>
                  ))}
              </div>
            </div>
            <div className='modal-size'>
              <p className='modal-size-title'>Size</p>
              <div className='modal-size-selector'>
                {sizeArr.map((size, idx) => (
                  <div className='modal-size-option' key={`modal-size-${idx}`}>
                    <span>{size}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className='modal-info-btn modal-add-to-bag'>
              ADD TO BAG
            </button>
            <button className='modal-info-btn modal-view-full-details'>
              VIEW FULL DETAILS
            </button>
          </div>
        </div>
        <div className='modal-close' onClick={closeModal}>
          <span>
            <img src={cross} alt='' />
          </span>
        </div>
      </div>
    </div>
  );
};
