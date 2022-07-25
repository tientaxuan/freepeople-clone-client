import React from 'react';
import './productGrid.scss';
import { GridCard } from './gridCard/GridCard';
import { page1_grid_data } from '../../data/productGrid';

export const ProductGrid = () => {
  const gridData = page1_grid_data;
  return (
    <div className='product-grid'>
      <div className='product-grid-container'>
        {gridData.map((card, idx) => (
          <GridCard cardItem={card} key={card.id ? card.id : idx} />
        ))}
      </div>
    </div>
  );
};
