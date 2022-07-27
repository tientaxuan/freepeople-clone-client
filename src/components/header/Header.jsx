import React, { useEffect, useRef } from 'react';
import './header.scss';
import './header_responsive.scss';
import { Announcement } from '../announcement/Announcement';
import { LocationDropdown } from '../location-dropdown/LocationDropdown';
import { Search } from '../search/Search';
import { ShoppingBag } from '../shoppingBag/ShoppingBag';
import { HeaderMenu } from '../header-menu/HeaderMenu';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeActiveSuperNav } from '../../app/slices/activeSuperNav';
import user from '../../assets/icon/user.svg';
import { preventBodyScrollY } from '../../widget/preventBodyScroll';
import { useCallback } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';

export const Header = () => {
  const matchMedium = useMediaQuery(`(max-width: ${breakPoint.medium})`);
  const matchMobile = useMediaQuery(`(max-width: ${breakPoint.modile})`);
  const shrinkHeight = matchMobile ? 30 : matchMedium ? 40 : 78;
  const stickyRef = useRef(null);
  const shrinkHeader = useCallback(() => {
    const scrollPst =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPst > shrinkHeight) {
      stickyRef.current.classList.add('shrink');
      document.body.classList.add('header-shrink');
    } else {
      stickyRef.current.classList.remove('shrink');
      document.body.classList.remove('header-shrink');
    }
  }, [stickyRef, shrinkHeight]);
  useEffect(() => {
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, [shrinkHeader]);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(pathname);
  const handleFp = () => {
    navigate('/', { replace: true });
  };
  const handleFpmovement = () => {
    navigate('/fpmovement', { replace: true });
  };
  return (
    <div className='header' ref={stickyRef}>
      <div className='header-first-bar'>
        <Announcement />
      </div>
      <div className='header-second-bar'>
        <LocationDropdown />
        <div className='header-second-bar__sign'>
          <img src={user} alt='' />
          <Link to='/auth' className='header-auth'>
            Sign In / Sign Up
          </Link>
        </div>
      </div>
      <div className='header-main'>
        <div className='header-main__upper'>
          <div className='header-main__upper__left'>
            <div
              className={`free-people ${
                pathname.includes('/fpmovement') ? '' : 'active'
              }`}
              onClick={handleFp}
            >
              <img
                src='https://images.ctfassets.net/udk41sh7kfzj/2GcuAlT2uFzpQy1hmX0i72/86e949ce18f87f88c85e25ca39af6ac5/Logo_FreePeople.svg'
                alt=''
              />
            </div>
            <div
              className={`free-people-movement ${
                pathname.includes('/fpmovement') ? 'active' : ''
              }`}
              onClick={handleFpmovement}
            >
              <img
                src='https://images.ctfassets.net/udk41sh7kfzj/13zMramB5P5SGXE2sNs2zr/e8538af76276a2554d8c163199866d9e/Logo_FPMovement.svg'
                alt=''
              />
            </div>
          </div>
          <div className='header-main__upper__right'>
            <Search stickyRef={stickyRef} />
            <ShoppingBag />
            <Hamburger stickyRef={stickyRef} />
          </div>
        </div>
        <div className='header-main__lower'>
          <HeaderMenu></HeaderMenu>
        </div>
      </div>
    </div>
  );
};

const Hamburger = ({ stickyRef }) => {
  const dispatch = useDispatch();
  const handleOnclick = (event) => {
    event.preventDefault();
    // document.body.classList.add('prevent-body-scroll');
    stickyRef.current.classList.remove('slide-top');
    // window.removeEventListener('scroll', headerScrollCallback);
    preventBodyScrollY();
    dispatch(changeActiveSuperNav(true));
  };
  return (
    <div className='hamburger' onClick={handleOnclick}>
      <span className='hamburger-middle'></span>
    </div>
  );
};
