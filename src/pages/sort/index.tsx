import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import TableContent from '@/components/sort/table/TableContent';
import TableHead from '@/components/sort/table/TableHead';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/pageoffset';
import { useFetchSort, useLockerAssignMutation } from '@/query/sort';
import { useFetchMe } from '@/query/user';
import { SortRequest } from '@/types/sort';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['학번', '1st', '2nd', '3rd', '건물', '삭제'];

const SortPage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const { data: lockers, isLoading: isLockerLoading } = useFetchSort(MAJOR[me!.major]);
  const { mutate } = useLockerAssignMutation();
  const [currentLocker, setCurrentLocker] = useState(lockers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteResult = (id: number) => {
    setCurrentLocker(locks => {
      const prevLockers = locks?.filter(l => l.id !== id);

      return prevLockers;
    });
  };

  const handleSubmitResult = () => {
    const request = currentLocker?.map(lock => lock.id);

    const requestData: SortRequest = { list: request || [] };
    mutate({ major: MAJOR[me!.major], sortResult: requestData });

    navigate(PATH.MAIN);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 예상 결과</Styled.Title>
        {isLockerLoading ? (
          <Loader />
        ) : (
          <>
            {lockers && lockers.length === 0 ? (
              <Styled.Message>사물함 신청자가 없습니다.</Styled.Message>
            ) : (
              <>
                <Styled.TableContainer>
                  <TableHead headers={TABLE_HEADER} />
                  <TableContent
                    contents={
                      currentLocker?.slice(
                        (currentPage - 1) * PAGE_OFFSET,
                        currentPage * PAGE_OFFSET
                      ) || []
                    }
                    handleDelete={handleDeleteResult}
                  />
                </Styled.TableContainer>
                <Styled.PaginationContainer>
                  <Pagination
                    currentPage={currentPage}
                    totalItems={currentLocker?.length || 0}
                    itemsPerPage={PAGE_OFFSET}
                    setState={setCurrentPage}
                  />
                </Styled.PaginationContainer>
                <Button variant='contained' color='primary' onClick={handleSubmitResult}>
                  배정 확정하기
                </Button>
              </>
            )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default SortPage;
