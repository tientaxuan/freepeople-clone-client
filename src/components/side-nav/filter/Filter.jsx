import React, { useState } from 'react';
import './filter.scss';
import filterData from '../../../data/filterList';
import queryString from 'query-string';
import { pipe } from 'ramda';
import _ from 'lodash';
import { useNavigate, useLocation } from 'react-router-dom';
import cross from '../../../assets/icon/cross.svg';

export const Filter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const filterObj = queryString.parse(window.location.search, {
    arrayFormat: 'comma',
    decode: true,
    skipNull: true,
  });
  let hasFilter = false;
  _.each(filterData, (filterItem) => {
    if (filterObj[filterItem.name]) {
      hasFilter = true;
    }
  });
  const clearAllFilter = () => {
    navigate(pathname, { replace: true });
  };
  return (
    <div className='filter'>
      <div className='filter-container'>
        <h3 className='filter-title'>Filter by:</h3>
        <div className='filter-main'>
          <div className='filter-main-container'>
            {filterData?.map &&
              filterData.map((list, idx) => (
                <FilterList list={list} key={list.name} />
              ))}
            <div
              className={`reset-all-filter ${hasFilter ? 'has-filter' : ''}`}
              onClick={clearAllFilter}
            >
              <p>Reset all filter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterList = ({ list }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((state) => !state);
  };
  const pushToHead = (arr, checkList) => {
    const filterArr = _.filter(arr, (ele, idx) =>
      _.includes(checkList, ele.value),
    );
    const addToHeadArr = filterArr.map((ele) => ({ ...ele, choosed: true }));
    const remainArr = _.filter(
      arr,
      (ele, idx) => !_.includes(checkList, ele.value),
    );
    return {
      arr: _.concat([...addToHeadArr], [...remainArr]),
      choosed: filterArr.length,
    };
  };

  const filter = queryString.parse(window.location.search, {
    arrayFormat: 'comma',
    decode: true,
    skipNull: true,
  });

  const processedArr = pushToHead(list.list, _.concat(filter[list.name], []));

  const listData = processedArr.arr;
  const choosedCount = processedArr.choosed;
  const concatFilter = pipe(_.concat, _.uniq);

  const handleFilter = (item) => {
    filter['page'] = undefined;
    filter['sort'] = undefined;
    if (item.choosed) {
      filter[list.name] = _.without(
        concatFilter(filter[list.name], []),
        item.value,
      );
    } else {
      filter[list.name] = _.without(
        concatFilter([item.value], filter[list.name]),
        null,
        undefined,
        '',
      );
    }
    const filterStr = queryString.stringify(filter, {
      encode: true,
      arrayFormat: 'comma',
      skipNull: true,
    });
    navigate(`${pathname}?${filterStr}`, { replace: true });
  };
  return (
    <div className='filter-list'>
      <div className='filter-list-title' onClick={handleToggle}>
        <h3 className='filter-list-display'>{list.display}</h3>
        <div className='filter-list-badge'>
          {choosedCount > 0 && <span>{choosedCount}</span>}
          {open ? (
            <i className='bx bx-minus'></i>
          ) : (
            <i className='bx bx-plus'></i>
          )}
        </div>
      </div>
      <ul className={`filter-list-container ${open ? 'open' : ''}`}>
        {listData?.map &&
          listData.map((item, idx) => (
            <li
              className={`filter-list-item ${item.choosed ? 'choosed' : ''}`}
              key={item.value}
              onClick={() => {
                handleFilter(item, idx);
              }}
            >
              <p className='filter-list-item-name'>
                {item.colorCodeDisplay && (
                  <span
                    className='color-list-item'
                    style={{ backgroundColor: item.colorCodeDisplay }}
                  ></span>
                )}
                {item.colorImgDisplay && (
                  <span
                    className='color-list-item'
                    style={{
                      backgroundImage: `url(${item.colorImgDisplay})`,
                    }}
                  ></span>
                )}
                {`${item.display || item.value} ${
                  item.choosed ? '' : '(' + item.count + ')'
                }`}
              </p>

              {item.choosed ? (
                <img src={cross} alt='' className='filter-choosed-icon' />
              ) : null}
            </li>
          ))}
      </ul>
    </div>
  );
};
