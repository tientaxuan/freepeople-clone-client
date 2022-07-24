import React from 'react';
import './productGrid.scss';
import { GridCard } from './gridCard/GridCard';

export const ProductGrid = () => {
  return (
    <div className='product-grid'>
      <div className='product-grid-container'>
        <GridCard />
      </div>
    </div>
  );
};
