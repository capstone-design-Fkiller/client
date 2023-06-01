import { MouseEvent, Dispatch, SetStateAction, useMemo, useEffect } from 'react';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { PAGE_OFFSET } from '@/constants/page_offset';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  setState: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalItems, itemsPerPage, setState } = props;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setState(totalPages);
    }
  }, [currentPage, totalPages, setState]);

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

  const currentGroup = Math.ceil(currentPage / PAGE_OFFSET);
  const startPage = (currentGroup - 1) * PAGE_OFFSET + 1;
  const endPage = Math.min(startPage + PAGE_OFFSET - 1, totalPages);

  const pageLists = useMemo(
    () => Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx),
    [startPage, endPage]
  );

  return (
    <Styled.Pagination>
      <Icon iconName='left' onClick={handlePrevClick} size='18' />
      {pageLists.map(num => (
        <Styled.PageNumber key={num} isActive={num === currentPage} onClick={handlePageClick}>
          {num}
        </Styled.PageNumber>
      ))}
      <Icon iconName='right' onClick={handleNextClick} size='18' />
    </Styled.Pagination>
  );
};

export { Pagination };
