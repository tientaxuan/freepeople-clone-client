import React from 'react';
import './catalogList.scss';
import { catalist_0 } from '../../data/catalogList';
import { Link } from 'react-router-dom';

export const CatalogList = () => {
  return (
    <div className='catalog-list'>
      <div className='catalog-list-container'>
        {catalist_0.map((ele, idx) => (
          <div className='catalist-item' key={`catalist-item-${idx}`}>
            <Link to={ele.path}>
              <img src={ele.img} alt='' />
              <span>{`Shop ${ele.title}`}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
