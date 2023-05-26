import { useEffect, useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination, PAGE_OFFSET } from '@/components/common/Pagination';
import TableContent from '@/components/sort/table/TableContent';
import TableHead from '@/components/sort/table/TableHead';
import { MAJOR } from '@/constants/major';
import { useFetchSort, useSortResult } from '@/query/sort';
import { useFetchMe } from '@/query/user';
import { SortRequest, SortResponse } from '@/types/sort';

const TABLE_HEADER = ['ID', '1순위', '2순위', '3순위', '건물'];

const SortPage = () => {
  const { me } = useFetchMe();
  const { data: lockers, isLoading: isLoadingLockers } = useFetchSort(MAJOR[me?.major]);
  const { resultData } = useSortResult();

  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (me && lockers) {
      //
    }
  }, [me, lockers]);

  const handleLockerClick = (lockerId: number) => {
    setSelectedLocker(lockerId);
  };

  const handleCloseModal = () => {
    setSelectedLocker(null);
  };

  const handleDeleteResult = () => {
    if (selectedLocker !== null) {
      const updatedLockers = lockers?.filter(
        (locker: SortResponse) => locker.id !== selectedLocker
      );
      setSelectedLocker(null);
    }
  };

  const handleSubmitResult = async () => {
    const currentLockers = lockers?.map(({ id }: SortResponse) => [id]);
    const requestData: SortRequest = { list: currentLockers || [] };
    await resultData(MAJOR[me?.major], requestData);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 예상 결과</Styled.Title>
        {isLoadingLockers ? (
          <Loader />
        ) : (
          <>
            <Styled.TableContainer>
              <TableHead headers={TABLE_HEADER} />
              <TableContent
                contents={
                  lockers?.slice((currentPage - 1) * PAGE_OFFSET, currentPage * PAGE_OFFSET) || []
                }
                handleContent={handleLockerClick}
              />
            </Styled.TableContainer>
            <Styled.PaginationContainer>
              <Pagination
                currentPage={currentPage}
                totalItems={lockers?.length || 0}
                itemsPerPage={PAGE_OFFSET}
                setState={setCurrentPage}
              />
            </Styled.PaginationContainer>
            <Button variant='contained' color='primary' onClick={handleSubmitResult}>
              Confirm Assignment
            </Button>
          </>
        )}
        {selectedLocker !== null && (
          <Modal title='배정 취소' onClose={handleCloseModal} open={!!selectedLocker}>
            {lockers?.map((locker: SortResponse) => {
              if (locker.id === selectedLocker) {
                return (
                  <Styled.ModalContent key={locker.user}>
                    <p>정말 배정을 취소하시겠습니까?</p>
                  </Styled.ModalContent>
                );
              }
              return null;
            })}
            <Button variant='contained' color='primary' onClick={handleDeleteResult}>
              확인
            </Button>
          </Modal>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default SortPage;
