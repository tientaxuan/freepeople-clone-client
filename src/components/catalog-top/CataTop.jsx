import React from 'react';
import './cataTop.scss';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import browserByList from '../../data/browerByList';
import _ from 'lodash';

export const CataTop = ({ list }) => {
  const { type, subType } = useParams();
  const { pathname } = useLocation();

  const subTypeDisplay = _.find(
    browserByList[type],
    (ele) => ele.path === pathname,
  ).display;
  console.log(subTypeDisplay);
  return (
    <div className='catalog-top'>
      <div className='catalog-top-container'>
        {subType === 'all' &&
          list?.map &&
          list.map((ele, idx) => (
            <div className='catalog-top-item' key={`catalog-top-item-${idx}`}>
              <Link to={ele.path}>
                <img src={ele.img} alt='' />
                {ele.title && <span>{`Shop ${ele.title}`}</span>}
              </Link>
            </div>
          ))}
        {subType !== 'all' && (
          <div className='catalog-path-info'>
            <span>{_.capitalize(type)}</span>
            <span>{'/'}</span>
            <span>{_.capitalize(subTypeDisplay)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
