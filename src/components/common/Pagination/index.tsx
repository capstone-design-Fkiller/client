import React, { useState, useEffect } from 'react';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextClick, onPrevClick }) => {
  const [activePage, setActivePage] = useState(Math.ceil(currentPage / 5));

  const generatePageNumbers = (activePage: number): React.ReactNode[] => {
    const numbers = [];
    for (let i = (activePage - 1) * 5 + 1; i <= Math.min(activePage * 5, totalPages); i++) {
      numbers.push(
        <Styled.PageNumber
          key={i}
          isActive={i === currentPage}
          isClickable={i !== currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Styled.PageNumber>
      );
    }
    return numbers;
  };

  const handlePageClick = (page: number) => {
    setActivePage(Math.ceil(page / 5));
    onNextClick();
  };
  
  useEffect(() => {
    setActivePage(Math.ceil(currentPage / 5));
  }, [currentPage]);

  return (
    <Styled.Pagination>
      <Icon iconName="left" onClick={() => {
        onPrevClick();
      }} />
      {generatePageNumbers(activePage)}
      <Icon iconName="right" onClick={() => {
        onNextClick();
      }} />
    </Styled.Pagination>
  );
};

export default Pagination;
