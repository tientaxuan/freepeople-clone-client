import React from 'react';
import './moreToRead.scss';
import moreToReadData from '../../data/moreToRead';
import { Link } from 'react-router-dom';

export const MoreToRead = () => {
  return (
    <div className='more-to-read'>
      <h3 className='more-to-read-title'>More To Read</h3>
      <div className='more-to-read-container'>
        {moreToReadData?.map &&
          moreToReadData.map((item, idx) => (
            <div className='more-to-read-item' key={`more-to-read-item-${idx}`}>
              <div className='more-to-read-item-img'>
                <Link to={item.path}>
                  <img src={item.img} alt='' />
                </Link>
              </div>
              <div className='more-to-read-item-info'>
                <h3 className='more-to-read-item-info-title'>{item.title}</h3>
                <h3 className='more-to-read-item-info-intro'>{item.intro}</h3>
                <p className='more-to-read-item-info-sub-intro'>
                  {item.subIntro}
                </p>
                <Link to={item.path}>{item.pathTitle}</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
