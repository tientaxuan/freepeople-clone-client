import React from 'react';
import './sideNav.scss';
import { Filter } from './filter/Filter';
import { BrowserBy } from './browser-by/BrowserBy';

export const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='side-nav-container'>
        <BrowserBy />
        <Filter />
      </div>
    </div>
  );
};
