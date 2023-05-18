import { useEffect, useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import Pagination from '@/components/common/Pagination';
import TableContent from '@/components/result/table/TableContent';
import TableHead from '@/components/result/table/TableHead';
import { useFetchResult } from '@/query/locker';
import { useFetchMe } from '@/query/user';
import { LockerResponse, LockerResult } from '@/types/locker';

const PAGE_OFFSET = 10;
const TABLE_HEADER = ['사물함ID', '사물함 위치', '사용자 학번', '사용자 이름'];

const ResultPage = () => {
  const [lockers, setLockers] = useState<LockerResult[]>([]);
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const { me } = useFetchMe();
  const { locker } = useFetchResult(me?.major);

  const handleLockerClick = (lockerId: number) => {
    setSelectedLocker(lockerId);
  };

  const handleCloseModal = () => {
    setSelectedLocker(null);
  };

  useEffect(() => {
    if (me && locker) {

      // useEffect(() => {
      //   if (me && locker) {
      //     setLockers(locker);
      //   }
      // }, [me?.major, locker]);
      
      const extractedLockers = locker.map((l: LockerResponse) => {
        return {
          lockerId: l.id,
          building: l.building_id,
          userId: l.owned_id || null,
          name: l.owned_id ? me.name : null,
        };
      });
      setLockers(extractedLockers);
    }
  }, [me?.major, locker]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(locker.length / PAGE_OFFSET);
  const startIndex = (currentPage - 1) * PAGE_OFFSET;
  const endIndex = startIndex + PAGE_OFFSET;
 
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 결과</Styled.Title>
        {/* 배정기간이 아닐 경우: <Styled.Message>지금은 사물함 신청기간입니다.</Styled.Message> */}
        <Styled.TableContainer>   
          <TableHead headers={TABLE_HEADER} />
          <TableContent
            contents={lockers.slice(startIndex, endIndex)}
            handleContent={handleLockerClick}
          />
        </Styled.TableContainer>
        <Styled.PaginationContainer>
          <Pagination currentPage={currentPage} totalPages={totalPages} setState={setCurrentPage} />
        </Styled.PaginationContainer>
        {selectedLocker !== null && (
          <Modal title="개별 알림" onClose={handleCloseModal} open={!!selectedLocker}>
            <textarea onChange={handleInputChange} value={message} rows={4} placeholder='작성할 내용' />
            <Button variant="contained" color="primary">
              작성
            </Button>
          </Modal>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default ResultPage;