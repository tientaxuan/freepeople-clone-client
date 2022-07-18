import React from 'react';
import './middleHero.scss';
import { middleHeroData } from '../../data/middleHero';
import { Link } from 'react-router-dom';

export const MiddleHero = () => {
  return (
    <div className='middle-hero'>
      <div className='middle-hero-container'>
        <div className='middle-hero-image'>
          <picture>
            {middleHeroData.picture.map((ele, idx) =>
              ele.default ? (
                <img
                  src={ele.img}
                  alt=''
                  key={`middle-hero-collection-poster-default`}
                />
              ) : (
                <source
                  media={`(max-width: ${ele.breakpoint})`}
                  srcSet={ele.img}
                  key={`middle-hero-collection-poster-${idx}`}
                />
              ),
            )}
          </picture>
        </div>
        <div className='middle-hero-info'>
          <h3 className='middle-hero-title'>{middleHeroData.title}</h3>
          <p className='middle-hero-intro'>{middleHeroData.intro}</p>
          <div className='middle-hero-btn'>
            <Link to={middleHeroData.path}>Shop The Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
