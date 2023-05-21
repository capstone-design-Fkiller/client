import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import Pagination from '@/components/common/Pagination';
import TableContent from '@/components/notice/table/TableContent';
import TableHead from '@/components/notice/table/TableHead';
import { useFetchNotice } from '@/query/notice';
import { NoticeResponse } from '@/types/notice';
import { PATH } from '@/utils/path';

const PAGE_OFFSET = 10;
const TABLE_HEADER = ['ID', '학과', '제목', '작성일'];

const NoticePage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);

  const { data: notices, isLoading, isError } = useFetchNotice();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching notices.</div>;
  }

  const sortedNotices = notices ? [...notices].reverse() : [];

  const noticesLength = sortedNotices.length;

  const totalPages = Math.ceil(noticesLength / PAGE_OFFSET);
  const startIndex = (currentPage - 1) * PAGE_OFFSET;
  const endIndex = startIndex + PAGE_OFFSET;

  const handleNoticeClick = (noticeId: number) => {
    setSelectedNotice(noticeId);
  };

  const handleCloseModal = () => {
    setSelectedNotice(null);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항</Styled.Title>
        <Styled.TableContainer>
          <TableHead headers={TABLE_HEADER} />
          <TableContent
            contents={sortedNotices.slice(startIndex, endIndex)}
            handleContent={handleNoticeClick}
          />
        </Styled.TableContainer>

        <Pagination currentPage={currentPage} totalPages={totalPages} setState={setCurrentPage} />
        <Button variant='contained' onClick={() => navigate(PATH.CREATE_NOTICE)}>
          공지사항 관리하기
        </Button>
        <Modal
          onClose={handleCloseModal}
          title={`Notice Detail [${selectedNotice}]`}
          open={!!selectedNotice}
        >
          <Styled.ModalHeader>
            <Styled.ModalTitle>
              {selectedNotice &&
                `${selectedNotice}. ${
                  sortedNotices.find((notice: NoticeResponse) => notice.id === selectedNotice)
                    ?.title
                }`}{' '}
            </Styled.ModalTitle>
          </Styled.ModalHeader>
          <Styled.ModalContent>
            {selectedNotice &&
              sortedNotices.find((notice: NoticeResponse) => notice.id === selectedNotice)
                ?.content}{' '}
          </Styled.ModalContent>
        </Modal>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticePage;
