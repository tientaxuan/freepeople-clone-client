import React, { useState, useEffect, useRef } from 'react';
import './locationDropdown.scss';
import { decode } from 'html-entities';
import { useSelector, useDispatch } from 'react-redux';
import { changeCountry } from '../../app/slices/countrySlice';
import { changeCurrency } from '../../app/slices/currencySlice';
import countriesList from '../../data/countriesList';
import currencyItem from '../../data/currencyList';
import earth from '../../assets/icon/earth.svg';

// import svg img
// import usaImg from '../../assets/images/flag/usa.svg';
// import ukImg from '../../assets/images/flag/uk.svg';
// import chinaImg from '../../assets/images/flag/china.svg';
// import japanImg from '../../assets/images/flag/japan.svg';
// import franceImg from '../../assets/images/flag/france.svg';
// import hongkongImg from '../../assets/images/flag/hongkong.svg';
// import canadaImg from '../../assets/images/flag/canada.svg';
// import australiaImg from '../../assets/images/flag/australia.svg';
// import germanImg from '../../assets/images/flag/german.svg';
// import netherlandImg from '../../assets/images/flag/netherland.svg';

// const countriesList = [
//   {
//     entity: 'US',
//     name: 'United States',
//     img: usaImg,
//   },
//   {
//     entity: 'UK',
//     name: 'United Kingdom',
//     img: ukImg,
//   },
//   {
//     entity: 'CN',
//     name: 'China',
//     img: chinaImg,
//   },
//   {
//     entity: 'AU',
//     name: 'Australia',
//     img: australiaImg,
//   },
//   {
//     entity: 'CA',
//     name: 'Canada',
//     img: canadaImg,
//   },
//   {
//     entity: 'GE',
//     name: 'Germany',
//     img: germanImg,
//   },
//   {
//     entity: 'FR',
//     name: 'France',
//     img: franceImg,
//   },
//   {
//     entity: 'HK',
//     name: 'Hong Kong SAR',
//     img: hongkongImg,
//   },
//   {
//     entity: 'JP',
//     name: 'Japan',
//     img: japanImg,
//   },
//   {
//     entity: 'NE',
//     name: 'Netherlands',
//     img: netherlandImg,
//   },
// ];

// const currencyItem = [
//   {
//     display: 'USD',
//     entity: '&dollar;',
//   },
//   {
//     display: 'CAD',
//     entity: '&dollar;',
//   },
//   {
//     display: 'AUD',
//     entity: '&dollar;',
//   },
//   {
//     display: 'EUR',
//     entity: '&euro;',
//   },
//   {
//     display: 'JPY',
//     entity: '&yen;',
//   },
//   {
//     display: 'HKD',
//     entity: '&dollar;',
//   },
//   {
//     display: 'NZD',
//     entity: '&dollar;',
//   },
// ];

export const LocationDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const country = JSON.parse(localStorage.getItem('country'));
    const currency = JSON.parse(localStorage.getItem('currency'));
    country && dispatch(changeCurrency(currency));
    currency && dispatch(changeCountry(country));
  }, [dispatch]);

  const [active, setActive] = useState(false);
  const { currency, country } = useSelector((state) => state);
  const dropdown_el = useRef(null);
  // useEffect(() => {
  //   const handleMouseDown = document.addEventListener('mousedown', (e) => {
  //     if (dropdown_el.current && !dropdown_el.current.contains(e.target)) {
  //       setActive(false);
  //     }
  //   });
  //   return document.removeEventListener('mousedown', handleMouseDown);
  // }, []);

  const handleMouseOver = (e) => {
    setActive((state) => true);
  };
  const handleMouseOut = (e) => {
    setActive((state) => false);
  };
  return (
    <div
      className='location-dropdown'
      ref={dropdown_el}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className='location-dropdown__toggle'>
        <img src={earth} alt='' />
        <span className='location-info'>
          {country?.entity} {decode(currency?.entity, 'html5')}
        </span>
        {active ? (
          <i className='bx bx-chevron-up'></i>
        ) : (
          <i className='bx bx-chevron-down'></i>
        )}
      </div>
      {active && (
        <div className='location-dropdown__content'>
          <Country
            handleClick={() => {
              // setActive((state) => !state);
            }}
          />
          <Divider />
          <Currency
            handleClick={() => {
              // setActive((state) => !state);
            }}
          />
        </div>
      )}
    </div>
  );
};
const Country = ({ handleClick }) => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  return (
    <div className='country'>
      <h3>Where are you shipping to ?</h3>
      <p>We ship to over 100 countries and regions including: </p>
      <ul className='country-list'>
        {countriesList.map((ele, idx) => (
          <li
            className={`country-item ${country?.id === idx ? 'active' : ''}`}
            key={idx}
            onClick={() => {
              localStorage.setItem(
                'country',
                JSON.stringify({ entity: ele.entity, id: idx, name: ele.name }),
              );
              dispatch(
                changeCountry({ entity: ele.entity, id: idx, name: ele.name }),
              );
              handleClick();
            }}
          >
            <img src={ele.img} alt={ele.name} />
            <p className='country-name'>{ele.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Currency = ({ handleClick }) => {
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  return (
    <div className='currency'>
      <h3>Currency</h3>
      <p>
        Please select the currency you would like to shop in. Your order will be
        transacted in USD
      </p>
      <ul className='currency-list'>
        {currencyItem.map((ele, idx) => (
          <li
            key={idx}
            onClick={() => {
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
              handleClick();
            }}
            className={`currency-item ${currency?.id === idx ? 'active' : ''}`}
          >
            {`${ele.display}`}
            {decode(ele.entity, { level: 'html5' })}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Divider = () => {
  return <div className='location-dropdown__content__divider'></div>;
};
