import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './headerMenu.scss';
import './headerMenu_responsive.scss';
import { useLocation } from 'react-router-dom';
import menuItem from '../../data/menuItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveSuperNav } from '../../app/slices/activeSuperNav';
import { changeCountry } from '../../app/slices/countrySlice';
import { changeCurrency } from '../../app/slices/currencySlice';
import { decode } from 'html-entities';
import countriesList from '../../data/countriesList';
import currencyItem from '../../data/currencyList';
import cross from '../../assets/icon/cross.svg';
import earth from '../../assets/icon/earth.svg';
import user from '../../assets/icon/user.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import chevLeft from '../../assets/icon/chev-left.svg';

export const HeaderMenu = () => {
  const inner_ref = useRef(null);
  const activeSuperNav = useSelector((state) => state.activeSuperNav);

  const dispatch = useDispatch();
  const handleClose = (event) => {
    event.preventDefault();
    document.body.classList.remove('prevent-body-scroll');
    dispatch(changeActiveSuperNav(false));
  };

  const handleClickOutside = (event) => {
    console.log('clicked');
    if (!inner_ref.current.contains(event.target)) {
      document.body.classList.remove('prevent-body-scroll');
      dispatch(changeActiveSuperNav(false));
    }
  };
  const matches = useMediaQuery('(max-width: 1080px)');

  useEffect(() => {
    console.log('effect runned');
    document.body.classList.remove('prevent-body-scroll');
    dispatch(changeActiveSuperNav(false));
  }, [matches, dispatch]);
  return (
    <div
      className={`header-menu-container ${
        activeSuperNav.value ? 'active' : ''
      }`}
      onClick={handleClickOutside}
    >
      <div className='header-menu-container__inner' ref={inner_ref}>
        <button className='header-menu-close' onClick={handleClose}>
          <img src={cross} alt='' />
        </button>
        <div className='header-menu'>
          <div className='header-menu-item-sign'>
            <img src={user} alt='' />
            <Link to='/auth' className=''>
              Sign In / Sign Up
            </Link>
          </div>
          {menuItem.map((ele, idx) => (
            <MenuItem item={ele} idx={idx} key={`menu-item-${idx}`} />
          ))}
          <LocationItem />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item, idx }) => {
  const activeSuperNav = useSelector((state) => state.activeSuperNav);
  const [activeMobile, setActiveMobile] = useState(false);
  const [active, setActive] = useState(false);
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  const { pathname } = useLocation();

  const handleToggleMobileContent = (event) => {
    event.preventDefault();
    setActiveMobile((state) => !state);
  };
  return (
    <div
      className='header-menu-item'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      key={`header-menu-item-${idx}`}
    >
      <div
        className={`header-menu-item__toggle ${
          pathname.includes(item.path) ? 'current' : ''
        }`}
        onClick={handleToggleMobileContent}
      >
        <Link to={item.path}>{item.display}</Link>
        <div className='header-menu-item__toggle__icon'>
          <i className='bx bx-chevron-right'></i>
        </div>
      </div>
      <div
        className={`header-menu-item__content ${active ? 'active' : ''} ${
          activeSuperNav.value ? 'menu-item-opened' : ''
        } ${activeMobile ? 'mobile-active' : ''}`}
      >
        <h3
          className='header-menu-item__content__heading'
          onClick={handleToggleMobileContent}
        >
          <div className='heading-toggle'>
            <img src={chevLeft} alt='' />
          </div>
          <div className='item-title-text'>{item.display}</div>
        </h3>
        {item.content.map((subContent, idx) => (
          <SubContent
            subContent={subContent}
            idx={idx}
            key={`sub-content-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

const SubContent = ({ subContent }) => {
  const [listOpen, setListOpen] = useState(false);
  const handleListOpen = (event) => {
    setListOpen((state) => !state);
  };
  return (
    <div className='header-menu-item__content__subcontent'>
      {subContent.title && (
        <h3
          className={`header-menu-item__content__subcontent__title ${
            subContent.main ? 'main-title' : ''
          }`}
        >
          <div className='title-text'>{subContent.title}</div>
          <div className='subcontent-open' onClick={handleListOpen}>
            {listOpen ? (
              <i className='bx bx-minus'></i>
            ) : (
              <i className='bx bx-plus'></i>
            )}
          </div>
        </h3>
      )}
      <ul
        className={`header-menu-item__content__subcontent__list ${
          subContent.main ? 'main-content' : 'other-content'
        } ${subContent.images ? 'image-content' : ''} ${
          listOpen ? 'active' : ''
        }`}
      >
        {subContent.list &&
          subContent.list.map((listItem, idx) => (
            <li
              className='header-menu-item__content__subcontent__list__item'
              key={`sub-content-list-item-${idx}`}
            >
              {listItem.display}
            </li>
          ))}
        {subContent.images &&
          subContent.images.map((listItem, idx) => (
            <li
              className='header-menu-item__content__subcontent__list__item'
              key={`sub-content-list-item-image${idx}`}
            >
              <img src={listItem.src} alt='' />
              {listItem.title && <span>{listItem.title}</span>}
            </li>
          ))}
      </ul>
    </div>
  );
};

const LocationItem = () => {
  const dispatch = useDispatch();

  const { currency, country } = useSelector((state) => state);

  useEffect(() => {
    const country = JSON.parse(localStorage.getItem('country'));
    const currency = JSON.parse(localStorage.getItem('currency'));
    country && dispatch(changeCurrency(currency));
    currency && dispatch(changeCountry(country));
  }, [dispatch]);

  const [activeMobile, setActiveMobile] = useState(false);

  const activeSuperNav = useSelector((state) => state.activeSuperNav);

  const handleToggleMobileContent = (event) => {
    event.preventDefault();
    setActiveMobile((state) => !state);
  };

  const handleChangeCountry = (ele, idx) => {
    localStorage.setItem(
      'country',
      JSON.stringify({
        entity: ele.entity,
        id: idx,
        name: ele.name,
      }),
    );
    dispatch(
      changeCountry({
        entity: ele.entity,
        id: idx,
        name: ele.name,
      }),
    );
  };

  const handleChangeCurrency = (ele, idx) => {
    localStorage.setItem(
      'currency',
      JSON.stringify({
        entity: ele.entity,
        id: idx,
        type: ele.display,
      }),
    );
    dispatch(
      changeCurrency({
        entity: ele.entity,
        id: idx,
        type: ele.display,
      }),
    );
  };
  return (
    <div className='header-menu-item location-item'>
      <div
        className='header-menu-item__toggle'
        onClick={handleToggleMobileContent}
      >
        <div className='location-item__text'>
          <img src={earth} alt='' />
          <span className='location-info'>
            {country.name} {decode(currency.entity, 'html5')}
          </span>
        </div>
        <div className='header-menu-item__toggle__icon'>
          <i className='bx bx-chevron-right'></i>
        </div>
      </div>
      <div
        className={`header-menu-item__content ${
          activeSuperNav.value ? 'menu-item-opened' : ''
        } ${activeMobile ? 'mobile-active' : ''}`}
      >
        <h3
          className='header-menu-item__content__heading'
          onClick={handleToggleMobileContent}
        >
          <div className='heading-toggle'>
            <img src={chevLeft} alt='' />
          </div>
          <div className='item-title-text'>
            <div className='location-item__text'>
              <img src={earth} alt='' />
              <span className='location-info'>
                {country.name} {decode(currency.entity, 'html5')}
              </span>
            </div>
          </div>
        </h3>
        <div className='location-item__content'>
          <div className='location-item__content__country'>
            <h3 className='location-item__content__country-title'>
              Country/Region
            </h3>
            <ul className='location-item__content__country-list'>
              {countriesList.map((ele, idx) => (
                <li
                  className={country.id === idx ? 'active' : ''}
                  key={`location-item_country-item-${idx}`}
                  onClick={() => {
                    handleChangeCountry(ele, idx);
                  }}
                >
                  {ele.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='location-item__content__currency'>
            <h3 className='location-item__content__currency-title'>Currency</h3>
            <ul className='location-item__content__currency-list'>
              {currencyItem.map((ele, idx) => (
                <li
                  className={currency.id === idx ? 'active' : ''}
                  key={`location-item_country-item-${idx}`}
                  onClick={() => {
                    handleChangeCurrency(ele, idx);
                  }}
                >
                  {ele.display}
                  {decode(ele.entity, 'html5')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
