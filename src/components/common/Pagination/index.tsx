import React, { MouseEvent, Dispatch, SetStateAction, useMemo } from 'react';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setState: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, setState } = props;

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setState(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setState(currentPage - 1);
    }
  };

  const handlePageClick = (e: MouseEvent<HTMLSpanElement>) => {
    const page = parseInt(e.currentTarget.innerText);
    setState(page);
  };

  const getPageLists = useMemo(() => {
    const pageListLength = 10;
    let startPage = Math.floor((currentPage - 1) / pageListLength) * pageListLength + 1;
    const endPage = Math.min(startPage + pageListLength - 1, totalPages);

    const pageLists = [];
    while (startPage <= endPage) {
      pageLists.push(startPage);
      startPage++;
    }

    return pageLists;
  }, [currentPage, totalPages]);

  return (
    <Styled.Pagination>
      <Icon iconName="left" onClick={handlePrevClick} size="18" />
      {getPageLists.map((num) => (
        <Styled.PageNumber key={num} isActive={num === currentPage} onClick={handlePageClick}>
          {num}
        </Styled.PageNumber>
      ))}
      <Icon iconName="right" onClick={handleNextClick} size="18" />
    </Styled.Pagination>
  );
};

export default Pagination;
