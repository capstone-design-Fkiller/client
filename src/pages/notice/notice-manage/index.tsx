import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination, PAGE_OFFSET } from '@/components/common/Pagination';
import TableContent from '@/components/notice/table/TableContent';
import TableHead from '@/components/notice/table/TableHead';
import { MAJOR } from '@/constants/major';
import { useDeleteNoticeMutation, useFetchMajorNotice } from '@/query/notice';
import { useFetchMe } from '@/query/user';
import { NoticeResponse } from '@/types/notice';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['ID', '학과', '제목', '작성일'];

const NoticeManagePage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const { data: notices, isLoading } = useFetchMajorNotice(MAJOR[me?.major || 0]);
  const { mutate: deleteNoticeMutation } = useDeleteNoticeMutation();
  const sortedNotices = notices ? notices.slice().reverse() : [];

  const handleNoticeClick = (noticeId: number) => {
    setSelectedNotice(noticeId);
  };

  const handleCloseModal = () => {
    setSelectedNotice(null);
  };

  const handleSubmit = () => {
    if (selectedNoticeData) {
      const res = confirm('정말 삭제하시겠습니까?');

      if (res) {
        deleteNoticeMutation(selectedNoticeData.id);
        navigate(PATH.NOTICE_MANAGE);
      }
    }

    handleCloseModal();
  };

  const selectedNoticeData = selectedNotice
    ? sortedNotices.find((notice: NoticeResponse) => notice.id === selectedNotice)
    : null;

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항 관리</Styled.Title>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Styled.TableContainer>
              <TableHead headers={TABLE_HEADER} />
              <TableContent
                contents={sortedNotices.slice(
                  (currentPage - 1) * PAGE_OFFSET,
                  currentPage * PAGE_OFFSET
                )}
                handleContent={handleNoticeClick}
              />
            </Styled.TableContainer>
            <Pagination
              currentPage={currentPage}
              totalItems={sortedNotices.length}
              itemsPerPage={PAGE_OFFSET}
              setState={setCurrentPage}
            />
          </>
        )}
        <Button variant='contained' onClick={() => navigate(PATH.NOTICE_CREATE)}>
          공지사항 작성하기
        </Button>
      </Styled.Root>
      <Modal
        onClose={handleCloseModal}
        title={`Notice Detail [${selectedNotice}]`}
        open={!!selectedNotice}
      >
        <Styled.ModalHeader>
          <Styled.ModalTitle>
            {selectedNoticeData && `${selectedNoticeData.id}. ${selectedNoticeData.title}`}
          </Styled.ModalTitle>
        </Styled.ModalHeader>
        <Styled.ModalContent>
          {selectedNoticeData && selectedNoticeData.content}
        </Styled.ModalContent>
        <Styled.ModalButtons>
          <Button variant='outlined' onClick={() => handleSubmit()}>
            삭제
          </Button>
        </Styled.ModalButtons>
      </Modal>
    </PageTemplate>
  );
};

export default NoticeManagePage;
