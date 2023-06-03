import { Dispatch, SetStateAction } from 'react';

import * as Styled from './style';
import TableContent from '../TableContent';

import Loader from '@/components/common/Loader';
import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/common/TableHead';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { SortResponse } from '@/types/sort';

interface SortResultProps {
  isLoading: boolean;

  currentSort: SortResponse[] | undefined;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  handleDelete: (id: number) => void;
}

const TABLE_HEADER = ['No.', '학번', '1st', '2nd', '3rd', '신청시간', '건물', '삭제'];

const SortResult = (props: SortResultProps) => {
  const { currentPage, setCurrentPage, currentSort, handleDelete, isLoading } = props;

  if (isLoading) return <Loader />;
  if (!currentSort?.length) return <Styled.Message>사물함 신청자가 없습니다.</Styled.Message>;

  return (
    <>
      <Styled.Wrapper>
        <Styled.TableContainer>
          <TableHead headers={TABLE_HEADER} />
          <TableContent
            contents={
              currentSort?.slice((currentPage - 1) * PAGE_OFFSET, currentPage * PAGE_OFFSET) || []
            }
            handleDelete={handleDelete}
          />
        </Styled.TableContainer>
      </Styled.Wrapper>
      <Pagination
        currentPage={currentPage}
        totalItems={currentSort?.length || 0}
        itemsPerPage={PAGE_OFFSET}
        setState={setCurrentPage}
      />
    </>
  );
};

export default SortResult;
