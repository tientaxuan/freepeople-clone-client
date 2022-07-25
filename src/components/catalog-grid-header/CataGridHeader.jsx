import React from 'react';
import './cataGridHeader.scss';
import { SortBar } from './sort-bar/SortBar';
import { Pagination } from './pagination/Pagination';

import _ from 'lodash';
import { useParams } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';

export const CataGridHeader = () => {
  const smallScreenMatch = useMediaQuery(`(max-width: ${breakPoint.small})`);
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
            {!smallScreenMatch && (
              <>
                <SortBar />
                <Pagination />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
