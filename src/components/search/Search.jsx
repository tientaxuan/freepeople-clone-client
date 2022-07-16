import React, { useState, useRef, useEffect } from 'react';
import './search.scss';
import './search_responsive.scss';
import { changeSearch } from '../../app/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import cross from '../../assets/icon/cross.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

export const Search = () => {
  // fetch trending list
  const trendingList = [
    {
      display: 'shorts',
    },
    {
      display: 'dress',
    },
    {
      display: 'jumpsuit',
    },
    {
      display: 'romper',
    },
    {
      display: 'overalls',
    },
  ];
  const newProductList = [
    {
      img: [
        'https://images.urbndata.com/is/image/FreePeople/66593385_095_b?$a15-category$&qlt=80&fit=constrain',
      ],
      name: 'Cali Crochet',
      type: 'Clutch',
    },
    {
      img: [
        'https://images.urbndata.com/is/image/FreePeople/60828381_014_b?$a15-category$&qlt=80&fit=constrain',
      ],
      name: 'Riptide',
      type: 'Necklace',
    },
    {
      img: [
        'https://images.urbndata.com/is/image/FreePeople/69993632_011_b?$a15-category$&qlt=80&fit=constrain',
      ],
      name: 'Coralie Maxi',
      type: 'Dress',
    },
  ];

  const [active, setActive] = useState(false);
  const toggle_el = useRef(null);
  const content_el = useRef(null);
  const searchInput_el = useRef(null);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const handleClick = (event) => {
    if (
      content_el.current.contains(event.target) ||
      toggle_el.current.contains(event.target)
    ) {
      setActive(true);
      document.body.classList.add('prevent-body-scroll');
    } else {
      setActive(false);
      document.body.classList.remove('prevent-body-scroll');
    }
  };

  const handleClear = () => {
    dispatch(changeSearch(''));
    searchInput_el.current.focus();
  };

  const handleClose = () => {
    document.body.classList.remove('prevent-body-scroll');
    setActive(false);
  };

  const handleScroll = (event) => {
    event.stopPropagation();
    console.log('scrolling');
  };

  const matches = useMediaQuery('(max-width: 1080px)');
  useEffect(() => {
    setActive(false);
    document.body.classList.remove('prevent-body-scroll');
  }, [matches]);

  return (
    <div className='search'>
      <div
        className={`search-dropdown ${active ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className='search-close'>
          <img src={cross} alt='' onClick={handleClose} />
        </div>
        <div className={`search-dropdown__toggle`} ref={toggle_el}>
          <input
            ref={searchInput_el}
            type='text'
            className='search-input'
            placeholder='Search Free People'
            value={search.value}
            onChange={(event) => {
              dispatch(changeSearch(event.target.value));
            }}
          />
          {search.value && active ? (
            <span className='search-clear' onClick={handleClear}>
              clear
            </span>
          ) : null}
          <button className='search-btn'>
            <i className='bx bx-search'></i>
          </button>
        </div>
        <div
          className='search-dropdown__content'
          ref={content_el}
          onScroll={handleScroll}
        >
          <div className='search-dropdown__content__trending'>
            <h4>Trending</h4>
            <ul className='search-dropdown__content__trending__list'>
              {trendingList.map((ele, idx) => (
                <button
                  className='search-dropdown__content__trending__list__item'
                  key={`trending-item-${idx}`}
                >
                  <i className='bx bx-search-alt-2'></i>
                  <span>{ele.display}</span>
                </button>
              ))}
            </ul>
          </div>
          <div className='search-dropdown__content__new-product'>
            <h4>New Products</h4>
            <ul className='search-dropdown__content__new-product__list'>
              {newProductList.map((ele, idx) => (
                <li
                  className='search-dropdown__content__new-product__list__item'
                  key={`new-product-item-${idx}`}
                >
                  <img src={ele.img[0]} alt='' />
                  <span className='new-product-name'>{ele.name}</span>
                  <span className='new-product-title'>{ele.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
