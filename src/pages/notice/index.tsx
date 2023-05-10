import { useState } from 'react';

import * as Styled from './style';

import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import Pagination from '@/components/common/Pagination'; // 페이지네이션 컴포넌트

const pageSize = 10;
const notices = [
  {
    id: 1,
    major: 'ELLT',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 2,
    major: 'EICC',
    title: '사물함 이용 기간',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 3,
    major: '프랑스',
    title: '사물함 반납 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 4,
    major: '스페인',
    title: '사물함 점검 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 5,
    major: '이탈리아',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 6,
    major: '아랍',
    title: '이용 시 주의사항',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },

  {
    id: 7,
    major: '베트남',
    title: '사물함 배정 완료',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 8,
    major: '인도',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 9,
    major: '몽골',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 10,
    major: '중언문',
    title: '사물함 물건 보관',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 11,
    major: '중외통',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
  {
    id: 12,
    major: '정외',
    title: '사물함 신청 안내',
    date: '230505',
    content:
    '사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.',
  },
];

const NoticePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);

  const totalPages = Math.ceil(notices.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const noticesToShow = notices.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          <Styled.TableHeader>
            <Styled.TableCell>ID</Styled.TableCell>
            <Styled.TableCell>학과</Styled.TableCell>
            <Styled.TableCell>제목</Styled.TableCell>
            <Styled.TableCell>작성일</Styled.TableCell>
          </Styled.TableHeader>
          {noticesToShow.map((notice) => (
            <Styled.TableRow key={notice.id}>
              <Styled.TableCell>{notice.id}</Styled.TableCell>
              <Styled.TableCell>{notice.major}</Styled.TableCell>
              <Styled.NoticeTitle onClick={() => handleNoticeClick(notice.id)}>
              {notice.title}
              </Styled.NoticeTitle>
              <Styled.TableCell>{notice.date}</Styled.TableCell>
              </Styled.TableRow>
              ))}
              </Styled.TableContainer>
              <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}
                  />
              {selectedNotice !== null && (
              <Modal onClose={handleCloseModal} title='Modal Title' open={true}>
            <Styled.ModalContent>{notices[selectedNotice - 1].content}</Styled.ModalContent>
          </Modal>
          )}
        </Styled.Root>
      </PageTemplate>
  );
};

export default NoticePage;