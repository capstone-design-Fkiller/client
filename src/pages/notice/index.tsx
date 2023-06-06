import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import NoticeTable from '@/components/notice/table';
import { MAJOR } from '@/constants/major';
import { useFetchNotice } from '@/query/notice';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const NoticePage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const { data: notices, isLoading } = useFetchNotice(MAJOR[me?.major || 0]);

  const TABLE_HEADER = ['ID', '제목', '작성자', '작성일'];

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항</Styled.Title>
        <Styled.TitleMajor>{me?.major}</Styled.TitleMajor>

        {isLoading ? <Loader /> : <NoticeTable notices={notices} head={TABLE_HEADER} />}

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
