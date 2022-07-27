import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './headerMenu.scss';
import './headerMenu_responsive.scss';
import { useParams } from 'react-router-dom';
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
import chevLeft from '../../assets/icon/chev-left.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import breakPoint from '../../data/breakPoint';
import scrollTop from '../../widget/scrollTop';

export const HeaderMenu = () => {
  const inner_ref = useRef(null);
  const activeSuperNav = useSelector((state) => state.activeSuperNav);
  const [itemActive, setItemActive] = useState('');

  const dispatch = useDispatch();
  const handleClose = (event) => {
    event.preventDefault();

    // document.body.classList.remove('prevent-body-scroll');
    dispatch(changeActiveSuperNav(false));
    setItemActive((state) => '');
  };

  const handleClickOutside = (event) => {
    if (!inner_ref.current.contains(event.target)) {
      // document.body.classList.remove('prevent-body-scroll');
      dispatch(changeActiveSuperNav(false));
      setItemActive((state) => '');
    }
  };
  const mediumMatch = useMediaQuery(`(max-width: ${breakPoint.medium})`);

  useEffect(() => {
    if (!mediumMatch && activeSuperNav) {
      // document.body.classList.remove('prevent-body-scroll');
      dispatch(changeActiveSuperNav(false));
      setItemActive((state) => '');
    }
  }, [mediumMatch, dispatch, activeSuperNav]);

  return (
    <div
      className={`header-menu-container ${
        activeSuperNav.value ? 'active' : ''
      }`}
      onClick={handleClickOutside}
    >
      <div className='header-menu-container__inner' ref={inner_ref}>
        {mediumMatch && (
          <button className='header-menu-close' onClick={handleClose}>
            <img src={cross} alt='' />
          </button>
        )}
        <div className='header-menu'>
          {mediumMatch && (
            <div className='header-menu-item-sign'>
              <img src={user} alt='' />
              <Link to='/auth' className=''>
                Sign In / Sign Up
              </Link>
            </div>
          )}
          {menuItem.map((ele, idx) => (
            <MenuItem
              item={ele}
              idx={idx}
              key={`menu-item-${ele.type}`}
              itemActive={itemActive}
              setItemActive={setItemActive}
            />
          ))}
          {mediumMatch && (
            <LocationItem
              itemActive={itemActive}
              setItemActive={setItemActive}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item, idx, itemActive, setItemActive }) => {
  const activeSuperNav = useSelector((state) => state.activeSuperNav);
  const [active, setActive] = useState(false);
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };
  const { type } = useParams();
  const navigate = useNavigate();

  const handleToggleMobileContent = (item) => {
    setItemActive((state) => {
      if (item.type === itemActive) return '';
      else return item.type;
    });
  };

  const doNothing = () => {};

  const mediumMatch = useMediaQuery(`(max-width: ${breakPoint.medium})`);
  return (
    <div
      className={`header-menu-item ${
        !mediumMatch && type === item.type ? 'current' : ''
      }`}
      onMouseOver={mediumMatch ? doNothing : handleMouseOver}
      onMouseOut={mediumMatch ? doNothing : handleMouseOut}
      key={`header-menu-item-${idx}`}
    >
      <div
        className={`header-menu-item__toggle`}
        onClick={
          mediumMatch
            ? (event) => {
                event.preventDefault();
                handleToggleMobileContent(item);
              }
            : () => {
                navigate(item.path, { replace: true });
              }
        }
      >
        <span>{item.display}</span>
        {mediumMatch && (
          <div className='header-menu-item__toggle__icon'>
            <i className='bx bx-chevron-right'></i>
          </div>
        )}
      </div>
      <div
        className={`header-menu-item__content ${
          !mediumMatch && active ? 'active' : ''
        } ${activeSuperNav.value ? 'menu-item-opened' : ''} ${
          itemActive === item.type ? 'mobile-active' : ''
        }`}
      >
        {mediumMatch && (
          <h3
            className='header-menu-item__content__heading'
            onClick={() => {
              handleToggleMobileContent(item);
            }}
          >
            <div className='heading-toggle'>
              <img src={chevLeft} alt='' />
            </div>
            <div className='item-title-text'>{item.display}</div>
          </h3>
        )}
        {item.content.map((subContent, idx) => (
          <SubContent
            subContent={subContent}
            idx={idx}
            key={`sub-content-${idx}`}
            setItemActive={setItemActive}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

const SubContent = ({ subContent, setItemActive, setActive }) => {
  const mediumMatch = useMediaQuery(`(max-width: ${breakPoint.medium})`);
  const [listOpen, setListOpen] = useState(false);
  const handleListOpen = (event) => {
    setListOpen((state) => !state);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (event, listItem) => {
    event.preventDefault();
    const target = listItem.path ? listItem.path : '';
    // document.body.classList.remove('prevent-body-scroll');
    navigate(target, { replace: true });
    scrollTop();
    dispatch(changeActiveSuperNav(false));
    setItemActive('');
    setActive(false);
  };
  const doNothing = () => {};
  return (
    <div className='header-menu-item__content__subcontent'>
      {subContent.title && (
        <h3
          className={`header-menu-item__content__subcontent__title ${
            subContent.main ? 'main-title' : ''
          }`}
          onClick={mediumMatch ? handleListOpen : doNothing}
        >
          <div className='title-text'>{subContent.title}</div>
          {mediumMatch && (
            <div className='subcontent-open'>
              {listOpen ? (
                <i className='bx bx-minus'></i>
              ) : (
                <i className='bx bx-plus'></i>
              )}
            </div>
          )}
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
              onClick={(event) => {
                handleNavigate(event, listItem);
              }}
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

const LocationItem = ({ itemActive, setItemActive }) => {
  const type = 'location-item';
  const dispatch = useDispatch();
  const { currency, country } = useSelector((state) => state);
  useEffect(() => {
    const country = JSON.parse(localStorage.getItem('country'));
    const currency = JSON.parse(localStorage.getItem('currency'));
    country && dispatch(changeCurrency(currency));
    currency && dispatch(changeCountry(country));
  }, [dispatch]);
  const activeSuperNav = useSelector((state) => state.activeSuperNav);

  const handleToggleMobileContent = () => {
    setItemActive((state) => {
      if (itemActive === type) return '';
      else return type;
    });
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
        onClick={() => {
          handleToggleMobileContent();
        }}
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
        } ${itemActive === type ? 'mobile-active' : ''}`}
      >
        <h3
          className='header-menu-item__content__heading'
          onClick={(event) => {
            event.preventDefault();
            handleToggleMobileContent();
          }}
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
