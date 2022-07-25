import React from 'react';
import './catalog.scss';
import {
  CataTop,
  SideNav,
  CataGridHeader,
  ProductGrid,
  WidgetBar,
} from '../../components/';
import catalogTopData from '../../data/catalogTop';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';

export const Catalog = () => {
  const smallScreenMatch = useMediaQuery(`(max-width: ${breakPoint.small})`);

  return (
    <div className='catalog'>
      <div className='catalog-container'>
        <CataTop list={catalogTopData} />
        <div className='catalog-main'>
          <div className='catalog-main-container'>
            {!smallScreenMatch && <SideNav />}
            <div className='catalog-main-grid'>
              <div className='catalog-main-grid-container'>
                <CataGridHeader />
                {smallScreenMatch && <WidgetBar />}
                <ProductGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
