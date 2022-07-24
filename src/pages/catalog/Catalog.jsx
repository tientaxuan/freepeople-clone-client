import React from 'react';
import './catalog.scss';
import {
  CataTop,
  SideNav,
  CataGridHeader,
  ProductGrid,
} from '../../components/';
import catalogTopData from '../../data/catalogTop';

export const Catalog = () => {
  return (
    <div className='catalog'>
      <div className='catalog-container'>
        <CataTop list={catalogTopData} />
        <div className='catalog-main'>
          <div className='catalog-main-container'>
            <SideNav />
            <div className='catalog-main-grid'>
              <div className='catalog-main-grid-container'>
                <CataGridHeader />
                <ProductGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
