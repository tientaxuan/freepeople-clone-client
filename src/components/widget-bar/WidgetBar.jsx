import React, { useState } from 'react';
import './widgetBar.scss';
import shopByData from '../../data/browerByList';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import chevTop from '../../assets/icon/chev-top.svg';
import chevLeft from '../../assets/icon/chev-left.svg';
import filterList from '../../data/filterList';

export const WidgetBar = () => {
  return (
    <div className='widget-bar'>
      <div className='widget-bar-container'>
        <div className='widget-bar__shop-by'>
          <div className='widget-bar__shop-by__container'>
            <ShopBy />
          </div>
        </div>
        <div className='widget-bar__sort-and-filter'>
          <div className='widget-bar__sort-and-filter__container'>
            <SortAndFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopBy = () => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const shopByList = shopByData[type];
  const handleToggle = () => {
    setToggle((state) => !state);
  };
  const navigate = useNavigate();
  const handleNavigate = (ele) => {
    setToggle(false);
    navigate(ele.path ? ele.path : '', { replace: true });
  };
  return (
    <div className='shop-by'>
      <div className='shop-by-toggle' onClick={handleToggle}>
        <p>Shop by Category</p>
        <div className={`shop-by-icon ${toggle ? 'rotate' : ''}`}>
          <img src={chevTop} alt='' />
        </div>
      </div>
      {toggle && (
        <div className='shop-by-content'>
          <ul className='shop-by-list'>
            {shopByList?.map &&
              shopByList.map((ele, idx) => (
                <li
                  className={`shop-by-item ${
                    ele.path === pathname ? 'current-path' : ''
                  }`}
                  key={idx}
                  onClick={() => {
                    handleNavigate(ele);
                  }}
                >
                  {ele.display}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const options = [
  {
    display: 'Featured',
    value: '',
  },
  {
    display: 'Price Low To High',
    value: 'PRICE_LOW_TO_HIGH',
  },
  {
    display: 'Price High To Low',
    value: 'PRICE_HIGH_TO_LOW',
  },
  {
    display: 'Newest',
    value: 'NEWEST',
  },
  {
    display: 'Bestselling',
    value: 'BESTSELLING',
  },
  {
    display: 'Ratings High To Low',
    value: 'RATINGS_HIGH_TO_LOW',
  },
  {
    display: 'A-Z',
    value: 'A-Z',
  },
  {
    display: 'Z-A',
    value: 'Z-A',
  },
];

const SortAndFilter = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeFilterItem, setActiveFilterItem] = useState('');
  const handleToggle = (filterItem) => {
    setActiveFilterItem((state) => {
      if (filterItem.name === activeFilterItem) return '';
      else return filterItem.name;
    });
  };
  const handleActiveModal = () => {
    setActiveModal(true);
  };
  const handleCloseModal = () => {
    setActiveFilterItem('');
    setActiveModal(false);
  };

  //handle query

  return (
    <div className='sort-and-filter'>
      <div className='sort-and-filter__container'>
        <div className='sort-and-filter-toggle' onClick={handleActiveModal}>
          <p>Filter + Sort</p>
        </div>
        {activeModal && (
          <div className='sort-and-filter-modal'>
            <div className='sort-and-filter-modal__container'>
              <div className='sort-and-filter-modal-title'>
                <h3>Filter and Sort</h3>
                <p>1716 products</p>
              </div>
              <div className='modal-sort'>
                <div className='modal-sort-container'>
                  <h3>Sort</h3>
                  <div className='modal-sort-list'>
                    {options.map((sortItem, idx) => (
                      <li
                        className='modal-sort-item'
                        key={sortItem.value ? sortItem.value : idx}
                      >
                        {sortItem.display}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
              <div className='modal-filter'>
                <div className='modal-filter-container'>
                  <ul className='modal-filter-list'>
                    {filterList.map((filterItem, idx) => (
                      <li className='modal-filter-item' key={filterItem.name}>
                        <div
                          className='modal-filter-item-toggle'
                          onClick={() => {
                            handleToggle(filterItem);
                          }}
                        >
                          <h3>{filterItem.display}</h3>
                          <img src={chevTop} alt='' />
                        </div>
                        {activeFilterItem === filterItem.name && (
                          <div className='modal-filter-item-content'>
                            <div className='modal-filter-item-content-container'>
                              <div
                                className='modal-filter-content-heading'
                                onClick={() => {
                                  handleToggle(filterItem);
                                }}
                              >
                                <div className='modal-filter-back'>
                                  <img src={chevLeft} alt='' />
                                  <span>Back</span>
                                </div>
                                <div className='modal-filter-content-title'>
                                  <h3>{filterItem.display}</h3>
                                  <p>{`0 Seleceted`}</p>
                                </div>
                              </div>
                              <ul className='modal-filter-content-list'>
                                {filterItem.list?.map &&
                                  filterItem.list.map((item, idx) => (
                                    <li
                                      className='filter-content-list-item'
                                      key={item.value ? item.value : idx}
                                    >
                                      {item.colorCodeDisplay && (
                                        <span
                                          style={{
                                            backgroundColor:
                                              item.colorCodeDisplay,
                                          }}
                                        ></span>
                                      )}
                                      {item.colorImgDisplay && (
                                        <span
                                          style={{
                                            backgroundImage: `url(${item.colorImgDisplay})`,
                                          }}
                                        ></span>
                                      )}

                                      {`${item.display || item.value} (${
                                        item.count
                                      })`}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='sort-and-filter-modal-button'>
                <div className='modal-button-container'>
                  <button className='modal-clear'>CLEAR</button>
                  <button className='modal-done' onClick={handleCloseModal}>
                    DONE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
