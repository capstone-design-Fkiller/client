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
    return <div>Loading...</div>; // 데이터 로딩 중이라면 로딩 UI를 표시할 수 있습니다.
  }

  if (isError) {
    return <div>Error occurred while fetching notices.</div>; // 데이터 가져오기 중 오류가 발생했을 경우 오류 UI를 표시할 수 있습니다.
  }

  const noticesLength = notices ? notices.length : 0; // null 체크 추가

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
            contents={notices ? notices.slice(startIndex, endIndex) : []} // null 체크 추가
            handleContent={handleNoticeClick}
          />
        </Styled.TableContainer>

        <Pagination currentPage={currentPage} totalPages={totalPages} setState={setCurrentPage} />
        <Button variant='contained' onClick={() => navigate(PATH.CREATE_NOTICE)}>
          공지사항 관리하기
        </Button>
        <Modal onClose={handleCloseModal} title='Notice Detail' open={!!selectedNotice}>
          <Styled.ModalContent>
            {selectedNotice &&
              notices?.find((notice: NoticeResponse) => notice.id === selectedNotice)?.content}{' '}
          </Styled.ModalContent>
        </Modal>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticePage;
