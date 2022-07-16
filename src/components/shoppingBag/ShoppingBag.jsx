import React from 'react';
import './shoppingBag.scss';
import shopbag from '../../assets/icon/shop-bag.svg';

export const ShoppingBag = () => {
  return (
    <div className='shopping-bag'>
      <img src={shopbag} alt='' />
    </div>
  );
};
