import React from 'react';
import './catalogList.scss';
import { Link } from 'react-router-dom';

export const CatalogList = ({ cataList }) => {
  return (
    <div className='catalog-list'>
      <div className='catalog-list-container'>
        {cataList?.map &&
          cataList.map((ele, idx) => (
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
