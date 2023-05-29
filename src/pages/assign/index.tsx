import { useState } from 'react';

import * as Styled from './style';

import TableContent from '@/components/assign/table/TableContent';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/sort/table/TableHead';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useFetchAssign } from '@/query/assign';
import { useFetchMe } from '@/query/user';

const TABLE_HEADER = ['신청 번호', '이용자 학번', '사물함 번호', '건물'];

const AssignPage = () => {
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const { me } = useFetchMe();
  const { data: lockers, isLoading: isLockerLoading } = useFetchAssign(MAJOR[me!.major]);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState<string>('');

  const handleLockerClick = (lockerId: number) => {
    setSelectedLocker(lockerId);
  };

  const handleCloseModal = () => {
    setSelectedLocker(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 최종 배정 결과</Styled.Title>
        {isLockerLoading ? (
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
            {selectedLocker !== null && (
              <Modal title='개별 알림' onClose={handleCloseModal} open={!!selectedLocker}>
                <textarea
                  onChange={handleInputChange}
                  value={message}
                  rows={4}
                  placeholder='작성할 내용'
                />
                <Button variant='contained' color='primary'>
                  작성
                </Button>
              </Modal>
            )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default AssignPage;
