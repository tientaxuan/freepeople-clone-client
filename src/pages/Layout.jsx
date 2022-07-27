import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import { Header, QuickShopModal, Footer } from '../components';
import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import { changeCountry } from '../app/slices/countrySlice';
// import { changeCurrency } from '../app/slices/currencySlice';
const Layout = () => {
  const activeModal = useSelector((state) => state.activeModal);
  return (
    <>
      {activeModal.value && <QuickShopModal />}
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
