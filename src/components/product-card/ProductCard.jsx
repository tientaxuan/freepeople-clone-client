import React, { useState } from 'react';
import './productCard.scss';
import { Link } from 'react-router-dom';
import heart from '../../assets/icon/heart.svg';
import { useDispatch } from 'react-redux';
import { changeActiveModal } from '../../app/slices/activeModal';

export const ProductCard = ({ cardItem }) => {
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const openModal = () => {
    dispatch(changeActiveModal(true));
  };
  return (
    <div className='product-card'>
      <div
        className={`product-card-container ${isHovering ? 'hovering' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link to={cardItem.path}>
          <div
            className='card-image'
            style={{
              backgroundImage: `url(${
                isHovering
                  ? cardItem.img[0]
                  : cardItem.img[1]
                  ? cardItem.img[1]
                  : cardItem.img[0]
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
        <p className='card-title'>{cardItem.title}</p>
      </div>
    </div>
  );
};
