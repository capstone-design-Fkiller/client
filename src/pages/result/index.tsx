import { useState } from 'react';

import * as Styled from './style';

import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/common/TableHead';
import TableContent from '@/components/result/TableContent';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useFetchSort } from '@/query/sort';
import { useFetchMe } from '@/query/user';

const TABLE_HEADER = ['순위', '학번', '1st', '2nd', '3rd', '신청시간', '건물'];

const ResultPage = () => {
  const { me } = useFetchMe();

  if (!me) throw new Error();

  const { data: results, isLoading } = useFetchSort(MAJOR[me?.major ?? '학과']);
  const currentApplyResult = useState(results);
  const [currentPage, setCurrentPage] = useState(1);
  const applyResults = results ? results.slice().reverse() : [];

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 신청 내역</Styled.Title>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {results && results.length === 0 ? (
              <Styled.Message>신청 내역이 없습니다.</Styled.Message>
            ) : (
              <>
                <Styled.TableContainer>
                  <TableHead headers={TABLE_HEADER} />
                  <TableContent
                    contents={
                      applyResults?.slice(
                        (currentPage - 1) * PAGE_OFFSET,
                        currentPage * PAGE_OFFSET
                      ) || []
                    }
                  />
                </Styled.TableContainer>
                <Pagination
                  currentPage={currentPage}
                  totalItems={currentApplyResult?.length || 0}
                  itemsPerPage={PAGE_OFFSET}
                  setState={setCurrentPage}
                />
              </>
            )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default ResultPage;
