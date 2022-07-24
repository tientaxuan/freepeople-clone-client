import React from 'react';
import './browserBy.scss';
import browserByData from '../../../data/browerByList';
import { useParams, Link, useLocation } from 'react-router-dom';

export const BrowserBy = () => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const browserList = browserByData[type];
  return (
    <div className='browser-by'>
      <div className='browser-by-container'>
        <h3 className='browser-by-title'>Browser by: </h3>
        <div className='browser-list'>
          <ul className='browser-list-container'>
            {browserList?.map &&
              browserList.map((ele, idx) => (
                <li
                  className={`browser-list-item ${ele.main ? 'leading' : ''} ${
                    pathname === ele.path ? 'current-path' : ''
                  }`}
                  key={idx}
                >
                  <Link to={ele.path ? ele.path : ''}>{ele.display}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
