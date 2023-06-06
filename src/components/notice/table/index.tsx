import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';
import TableContent from '../TableContent';

import { Pagination } from '@/components/common/Pagination';
import TableHead from '@/components/common/TableHead';
import { PAGE_OFFSET } from '@/constants/page_offset';
import { NoticeResponse } from '@/types/notice';
import { PATH } from '@/utils/path';

interface TableProps {
  notices: NoticeResponse[] | undefined;
  head: string[];
}

const NoticeTable = (props: TableProps) => {
  const { notices, head } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const sortedNotices = notices ? notices.slice() : [];
  const navigate = useNavigate();

  const handleNoticeClick = (noticeId: number) => {
    if (noticeId !== 0) {
      navigate(`${PATH.NOTICE}/${noticeId}`);
    }
  };

  if (!notices || !notices.length) return <Styled.Message>공지사항이 없습니다.</Styled.Message>;

  return (
    <>
      <Styled.TableContainer>
        <TableHead headers={head} />
        <TableContent
          contents={sortedNotices.slice((currentPage - 1) * PAGE_OFFSET, currentPage * PAGE_OFFSET)}
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
  );
};

export default NoticeTable;
