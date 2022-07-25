import React, { useState } from 'react';
import './productCard.scss';
import { Link } from 'react-router-dom';
import heart from '../../assets/icon/heart.svg';
import { useDispatch } from 'react-redux';
import { changeActiveModal } from '../../app/slices/activeModal';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';
import { preventBodyScrollY } from '../../widget/preventBodyScroll';

export const ProductCard = ({ cardPath, cardImg, cardTitle }) => {
  const smallMatch = useMediaQuery(`(max-width: ${breakPoint.small})`);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const openModal = () => {
    preventBodyScrollY();
    dispatch(changeActiveModal(true));
  };
  return (
    <div className='product-card'>
      <div
        className={`product-card-container ${isHovering ? 'hovering' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link to={cardPath}>
          <div
            className='card-image'
            style={{
              backgroundImage: `url(${
                smallMatch
                  ? cardImg[0]
                  : !isHovering
                  ? cardImg[0]
                  : cardImg[1]
                  ? cardImg[1]
                  : cardImg[0]
              })`,
            }}
          >
            {/* quick shop component */}
            <div className='quick-shop' onClick={openModal}>
              <div className='quick-shop-container'>
                <div className='quick-shop__toggle'>
                  <span>Quickshop</span>
                </div>
              </div>
            </div>

            {/* like component */}
            <div className='product-like'>
              <div className='product-like-container'>
                <div className='like-icon'>
                  <img src={heart} alt='' />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <p className='card-title'>{cardTitle}</p>
      </div>
    </div>
  );
};
