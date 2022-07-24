import React from 'react';
import './pagination.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import chevLeft from '../../../assets/icon/chev-left.svg';
import queryString from 'query-string';

const _totalPage = 25;
const _currentPage = 1;

export const Pagination = ({ totalPage }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryObj = queryString.parse(window.location.search, {
    arrayFormat: 'comma',
    skipNull: true,
    decode: true,
  });
  const currentPage = queryObj?.page ? Number(queryObj.page) : _currentPage;
  const pages = totalPage ? totalPage : _totalPage;

  const handlePagePrev = () => {
    if (currentPage === 1) return;
    const newPage = currentPage - 1;
    queryObj.page = newPage === 1 ? undefined : newPage;
    const queryStr = queryString.stringify(queryObj, {
      arrayFormat: 'comma',
      skipNull: true,
      encode: true,
    });
    navigate(`${pathname}?${queryStr}`);
  };

  const handlePageNext = () => {
    if (currentPage === pages) return;
    const newPage = currentPage + 1;
    queryObj.page = Number(newPage);
    const queryStr = queryString.stringify(queryObj, {
      arrayFormat: 'comma',
      skipNull: true,
      encode: true,
    });
    navigate(`${pathname}?${queryStr}`);
  };

  return (
    <div className='pagination'>
      <div className='pagination-container'>
        <div
          className={`page-prev ${currentPage === 1 ? 'in-active' : ''}`}
          onClick={handlePagePrev}
        >
          <img src={chevLeft} alt='' />
        </div>
        <div className='pagination-middle'>
          <span>{`${currentPage}  /  ${pages}`}</span>
        </div>
        <div
          className={`page-next ${currentPage === pages ? 'in-active' : ''}`}
          onClick={handlePageNext}
        >
          <img src={chevLeft} alt='' />
        </div>
      </div>
    </div>
  );
};
