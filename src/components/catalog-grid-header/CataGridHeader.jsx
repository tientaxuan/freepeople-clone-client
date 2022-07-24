import React from 'react';
import './cataGridHeader.scss';
import { SortBar } from './sort-bar/SortBar';
import { Pagination } from './pagination/Pagination';

import _ from 'lodash';
import { useParams } from 'react-router-dom';

export const CataGridHeader = () => {
  const { type } = useParams();
  return (
    <div className='catalog-grid-header'>
      <div className='catalog-grid-header-container'>
        <div className='catalog-grid-header-title'>
          <h3 className='category-name'>{_.capitalize(type)}</h3>
          <p className='category-total-products-count'>1727 products</p>
        </div>
        <div className='catalog-grid-header-widget'>
          <div className='catalog-grid-header-widget-container'>
            <SortBar />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
