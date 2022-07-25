import React, { useState } from 'react';
import './widgetBar.scss';
import shopByData from '../../data/browerByList';
import { useParams, Link, useLocation } from 'react-router-dom';
import chevTop from '../../assets/icon/chev-top.svg';

export const WidgetBar = () => {
  return (
    <div className='widget-bar'>
      <div className='widget-bar-container'>
        <div className='widget-bar__shop-by'>
          <div className='widget-bar__shop-by__container'>
            <ShopBy />
          </div>
        </div>
        <div className='widget-bar__sort-and-filter'>
          <div className='widget-bar__sort-and-filter__container'>
            <SortAndFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopBy = () => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const shopByList = shopByData[type];
  const handleToggle = () => {
    setToggle((state) => !state);
  };
  return (
    <div className='shop-by'>
      <div className='shop-by-toggle' onClick={handleToggle}>
        <p>Shop by Category</p>
        <div className={`shop-by-icon ${toggle ? 'rotate' : ''}`}>
          <img src={chevTop} alt='' />
        </div>
      </div>
      <div className={`shop-by-content ${toggle ? 'open' : ''}`}>
        <ul className='shop-by-list'>
          {shopByList?.map &&
            shopByList.map((ele, idx) => (
              <li
                className={`shop-by-item ${
                  ele.path === pathname ? 'current-path' : ''
                }`}
                key={idx}
              >
                <Link to={ele.path ? ele.path : ''}>{ele.display}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const SortAndFilter = () => {
  return (
    <div className='sort-and-filter'>
      <div className='sort-and-filter__container'>
        <div className='sort-and-filter-toggle'>
          <p>Filter + Sort</p>
        </div>
        <div className='sort-and-filter-modal'>
          <div className='sort-and-filter-modal__container'>
            <div className='sort-and-filter-modal-title'>
              <h3>Filter and Sort</h3>
              <p>1716 products</p>
            </div>
            <div className='modal-sort'>
              <div className='modal-sort-container'>
                <h3>Sort</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
