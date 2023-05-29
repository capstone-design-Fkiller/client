import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import TableContent from '@/components/assign/table/TableContent';
import TableHead from '@/components/assign/table/TableHead';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useCreateAlertMutation } from '@/query/alert';
import { useFetchAssign } from '@/query/assign';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['사물함', '건물', '학번', '이름', '알림'];

const AssignPage = () => {
  const { me } = useFetchMe();
  const { mutate: createAlertMutation } = useCreateAlertMutation();
  const { data: assigns, isLoading: isAssignLoading } = useFetchAssign(MAJOR[me?.major ?? '학과']);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState<string>('');
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null);
  const selectedLockerInfo = assigns?.at(selectedLocker ?? 0);

  const navigate = useNavigate();

  const handleSubmit = () => {
    createAlertMutation({ receiver: selectedLockerInfo?.user ?? 0, message });
    navigate(PATH.ASSIGN);
    handleCloseModal();
  };

  const handleLockerClick = (lockerId: number) => {
    setSelectedLocker(lockerId);
  };

  const handleCloseModal = () => {
    setSelectedLocker(null);
    setMessage('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 최종 배정 결과</Styled.Title>
        {isAssignLoading ? (
          <Loader />
        ) : (
          <>
            {assigns && assigns.length === 0 ? (
              <Styled.Message>사물함 배정 기간이 아닙니다.</Styled.Message>
            ) : (
              <>
                <Styled.TableContainer>
                  <TableHead headers={TABLE_HEADER} />
                  <TableContent
                    contents={
                      assigns?.slice((currentPage - 1) * PAGE_OFFSET, currentPage * PAGE_OFFSET) ||
                      []
                    }
                    handleContent={handleLockerClick}
                  />
                </Styled.TableContainer>
                <Styled.PaginationContainer>
                  <Pagination
                    currentPage={currentPage}
                    totalItems={assigns?.length || 0}
                    itemsPerPage={PAGE_OFFSET}
                    setState={setCurrentPage}
                  />
                </Styled.PaginationContainer>
                {selectedLocker !== null && (
                  <Modal title='개별 알림' onClose={handleCloseModal} open={!!selectedLocker}>
                    <Styled.textarea
                      onChange={handleInputChange}
                      value={message}
                      placeholder='보낼 알림을 입력하세요.'
                    />
                    <Button variant='contained' color='primary' onClick={handleSubmit}>
                      알림 보내기
                    </Button>
                  </Modal>
                )}
              </>
            )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default AssignPage;
