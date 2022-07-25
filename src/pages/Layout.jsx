import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import { Header, QuickShopModal, Footer } from '../components';

// import { useDispatch } from 'react-redux';
// import { changeCountry } from '../app/slices/countrySlice';
// import { changeCurrency } from '../app/slices/currencySlice';
const Layout = () => {
  return (
    <>
      <QuickShopModal />
      <Header />
      {
        <div className='main'>
          <Outlet />
        </div>
      }
      <Footer />
    </>
  );
};

export default Layout;
