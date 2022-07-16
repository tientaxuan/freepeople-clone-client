import React from 'react';
import thisVacationList from '../../data/thisVacationList';
import './thisVacation.scss';
import { Link } from 'react-router-dom';

export const ThisVacation = () => {
  return (
    <div className='this-vacation'>
      <ul className='this-vacation-container'>
        {thisVacationList.map((ele, idx) => (
          <li
            className='this-vacation-container__item'
            key={`this-vacation-item-${idx}`}
          >
            <Link to={ele.path}>
              <img src={ele.img} alt='' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
