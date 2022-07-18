import React, { useState } from 'react';
import './about.scss';

export const About = ({ aboutData }) => {
  const [showMore, setShowMore] = useState(false);
  const fullContent = aboutData.content;
  const sliceContent =
    aboutData.content?.length > 400
      ? aboutData.content?.slice && aboutData.content.slice(0, 400) + '...'
      : aboutData.content;
  const isNotNeededSlice = sliceContent === aboutData.content;
  const handleClick = () => {
    setShowMore((state) => !state);
  };
  return (
    <div className='about'>
      <div className='about-container'>
        <h3 className='about-title'>{aboutData.title}</h3>
        <p className='about-content'>
          {!isNotNeededSlice && sliceContent && !showMore
            ? sliceContent
            : fullContent}
        </p>
        {!isNotNeededSlice && (
          <span className='about-toggle' onClick={handleClick}>
            {!showMore ? 'show more' : 'show less'}
          </span>
        )}
      </div>
    </div>
  );
};
