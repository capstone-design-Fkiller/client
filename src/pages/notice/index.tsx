import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/common/TableHead';
import TableContent from '@/components/notice/TableContent';
import { MAJOR } from '@/constants/major';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { useFetchNotice } from '@/query/notice';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const TABLE_HEADER = ['ID', '제목', '작성자','작성일'];

const NoticePage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNotice, setSelectedNotice] = useState<number>(0);
  const { data: notices, isLoading } = useFetchNotice(MAJOR[me?.major || 0]);
  const sortedNotices = notices ? notices.slice().reverse() : [];

  const handleNoticeClick = (noticeId: number) => {
    setSelectedNotice(noticeId);
    if (noticeId !== 0) {
      navigate(`${PATH.NOTICE}/${noticeId}`);
    }
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항</Styled.Title>
        <Styled.TitleMajor>{me?.major}</Styled.TitleMajor>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {notices && notices.length === 0 ? (
              <Styled.Message>공지사항이 없습니다.</Styled.Message>
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
          </>
        )}
        {me?.is_usermode || (
          <Button variant='contained' onClick={() => navigate(PATH.NOTICE_CREATE)}>
            새 공지사항 작성하기
          </Button>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticePage;
