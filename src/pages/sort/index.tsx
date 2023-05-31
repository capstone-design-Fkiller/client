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
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useFetchMyMajor } from '@/query/major';
import { useFetchSort, useLockerAssignMutation } from '@/query/sort';
import { useFetchMe } from '@/query/user';
import { SortRequest } from '@/types/sort';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['학번', '1st', '2nd', '3rd', '건물', '삭제'];

const SortPage = () => {
  const { me } = useFetchMe();
  if (!me) throw new Error();

  const navigate = useNavigate();
  const { data: sorts, isLoading: isSortLoading } = useFetchSort(MAJOR[me?.major ?? '학과']);
  const { mutate } = useLockerAssignMutation();
  const [currentSort, setCurrentSort] = useState(sorts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { majorInfo } = useFetchMyMajor(MAJOR[me.major]);

  const handleDeleteResult = (id: number) => {
    setCurrentSort(locks => {
      const prevLockers = locks?.filter(l => l.id !== id);

      return prevLockers;
    });
  };

  const handleSubmitResult = () => {
    const request = currentSort?.map(lock => lock.id);
    const requestData: SortRequest = { list: request || [] };
    mutate({ major: MAJOR[me.major], sortResult: requestData });
    setIsButtonDisabled(true);
    navigate(PATH.MAIN);
  };

  const shouldShowButton = majorInfo?.apply_end_date
    ? new Date(majorInfo?.apply_end_date) < new Date()
    : false;

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 예상 결과</Styled.Title>
        <Styled.InformText>
          <p>사물함 신청 끝나면 배정 확정 버튼이 생성됩니다.</p>
          <p>배정 확정 버튼을 누르면 변경이 불가합니다.</p>
        </Styled.InformText>
        {isSortLoading ? (
          <Loader />
        ) : (
          <>
            {sorts && sorts.length === 0 ? (
              <Styled.Message>사물함 신청자가 없습니다.</Styled.Message>
            ) : (
              <>
                <Styled.TableContainer>
                  <TableHead headers={TABLE_HEADER} />
                  <TableContent
                    contents={
                      currentSort?.slice(
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
                    totalItems={currentSort?.length || 0}
                    itemsPerPage={PAGE_OFFSET}
                    setState={setCurrentPage}
                  />
                </Styled.PaginationContainer>
                {shouldShowButton && (
                  <Button variant='contained' color='primary' onClick={handleSubmitResult}>
                    배정 확정하기
                  </Button>
                )}
              </>
            )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default SortPage;
