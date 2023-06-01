import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import TableContent from '@/components/assign/TableContent';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/common/TableHead';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useCreateAlertMutation } from '@/query/alert';
import { useFetchAssign } from '@/query/assign';
import { useFetchMe } from '@/query/user';
import { AssignResponse } from '@/types/assign';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['사물함', '건물', '학번', '이름', '알림'];

const AssignPage = () => {
  const { me } = useFetchMe();
  const { mutate: createAlertMutation } = useCreateAlertMutation();
  const { data: assigns, isLoading: isAssignLoading } = useFetchAssign(MAJOR[me?.major ?? '학과']);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState<string>('');
  const [selectedAssignId, setSelectedAssignId] = useState<number | null>(null);
  const [selectedAssign, setSelectedAssign] = useState<AssignResponse | null>(null);

  const navigate = useNavigate();

  const handleSendAlert = () => {
    createAlertMutation({ receiver: selectedAssign?.user ?? 0, message });
    navigate(PATH.ASSIGN);
    handleCloseModal();
  };

  const handleLockerClick = (assignId: number) => {
    setSelectedAssignId(assignId);
    const selectAssign = assigns?.find(assign => assign.id == assignId);
    setSelectedAssign(selectAssign ?? null);
  };

  const handleCloseModal = () => {
    setSelectedAssignId(null);
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
                {selectedAssignId !== null && (
                  <Modal title='개별 알림' onClose={handleCloseModal} open={!!selectedAssignId}>
                    <Styled.textarea
                      onChange={handleInputChange}
                      value={message}
                      placeholder='보낼 알림을 입력하세요.'
                    />
                    <Button variant='contained' color='primary' onClick={handleSendAlert}>
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
