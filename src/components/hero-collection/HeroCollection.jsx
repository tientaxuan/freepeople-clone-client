import React from 'react';
import './heroCollection.scss';
import heroCollectionData from '../../data/heroCollectionData';
import { Link } from 'react-router-dom';

export const HeroCollection = () => {
  return (
    <div className='hero-collection'>
      <div className='hero-collection-container'>
        <Link to={heroCollectionData.path}>
          <picture className='hero-collection-container__poster'>
            {heroCollectionData.pictures.map((ele, idx) =>
              ele.defautl ? (
                <img src={ele.src} alt='' key={`collection-poster-default`} />
              ) : (
                <source
                  media={`(max-width: ${ele.breakpoint})`}
                  srcSet={ele.src}
                  key={`collection-poster-${idx}`}
                />
              ),
            )}
          </picture>
        </Link>
        <Link className='button' to={heroCollectionData.path}>
          Shop The Collection
        </Link>
      </div>
    </div>
  );
};
