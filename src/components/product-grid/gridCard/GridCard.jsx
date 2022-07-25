import React, { useState } from 'react';
import './gridCard.scss';
import { ProductCard } from '../../product-card/ProductCard';
import _ from 'lodash';

export const GridCard = ({ cardItem }) => {
  const colorsDisplay = _.slice(cardItem.color, 0, 4);
  const [currentColor, setCurrentColor] = useState(cardItem.color[0]);
  const images = currentColor.images;
  const handleChangeImage = (color) => {
    setCurrentColor(color);
  };
  const remain = cardItem.color.length > 4 ? cardItem.color.length - 4 : 0;
  return (
    <div className='grid-card'>
      <div className='grid-card-container'>
        <ProductCard
          cardImg={images}
          cardTitle={cardItem.name}
          cardPath={cardItem.path}
        />
        <div className='grid-card-price'>
          <span>{cardItem.price}</span>
        </div>
        <div className='grid-card-color-picker'>
          {colorsDisplay.map((color, idx) => (
            <div
              className={`grid-card-color-icon ${
                currentColor.code === color.code ? 'current' : ''
              }`}
              key={color.code}
              onClick={() => {
                handleChangeImage(color);
              }}
            >
              <span
                className='grid-color-thumb'
                style={{ backgroundImage: `url(${color.color_image})` }}
              ></span>
            </div>
          ))}
          {remain > 0 && (
            <span className='grid-card-color-remain'>{`+${remain}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
