import React from 'react';
import './sortBar.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const options = [
  {
    display: 'Featured',
    value: '',
  },
  {
    display: 'Price Low To High',
    value: 'PRICE_LOW_TO_HIGH',
  },
  {
    display: 'Price High To Low',
    value: 'PRICE_HIGH_TO_LOW',
  },
  {
    display: 'Newest',
    value: 'NEWEST',
  },
  {
    display: 'Bestselling',
    value: 'BESTSELLING',
  },
  {
    display: 'Ratings High To Low',
    value: 'RATINGS_HIGH_TO_LOW',
  },
  {
    display: 'A-Z',
    value: 'A-Z',
  },
  {
    display: 'Z-A',
    value: 'Z-A',
  },
];

export const SortBar = () => {
  const queryObj = queryString.parse(window.location.search, {
    arrayFormat: 'comma',
    skillNull: true,
    decode: true,
  });

  const sort = queryObj['sort'] ? queryObj['sort'] : '';
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleSort = (ele) => {
    const str = queryString.stringify(
      { ...queryObj, sort: ele.value },
      { arrayFormat: 'comma', decode: true, skipNull: true },
    );
    navigate(`${pathname}?${str}`);
  };
  return (
    <div className='sort-bar'>
      <div className='sort-bar-container'>
        <label htmlFor='select-sort-bar'>Sort: </label>
        <select
          name='sort'
          id='select-sort-bar'
          value={sort}
          onChange={() => {}}
        >
          {options.map((ele, idx) => (
            <option
              value={ele.value}
              key={idx}
              onClick={(event) => {
                event.preventDefault();
                handleSort(ele);
              }}
            >
              {ele.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
