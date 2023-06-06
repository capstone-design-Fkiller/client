import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import Post from '@/components/notice/Post';
import { useDeleteNoticeMutation, useFetchNoticeDetail } from '@/query/notice';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const NoticeDetailPage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const { data: noticeData, isLoading } = useFetchNoticeDetail(Number(noticeId));
  const { mutate: deleteNoticeMutation } = useDeleteNoticeMutation();

  if (isLoading) return <Loader />;

  const handleDelete = () => {
    const check = confirm('정말 삭제하시겠습니까?');

    if (check) {
      deleteNoticeMutation(Number(noticeId));
      navigate(PATH.NOTICE);
    }
  };

  const handleEdit = () => {
    navigate(`${PATH.NOTICE}/edit/${noticeId}`);
  };

  if (!noticeData || !noticeId || isNaN(parseInt(noticeId))) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항</Styled.Title>
        <Styled.TitleMajor>{me?.major}</Styled.TitleMajor>

        <Post {...noticeData} created={noticeData.created_at} />

        {me?.is_usermode || (
          <Styled.ButtonContainer>
            <Button variant='outlined' onClick={handleEdit}>
              수정하기
            </Button>
            <Button variant='outlined' onClick={handleDelete} color='error'>
              삭제하기
            </Button>
          </Styled.ButtonContainer>
        )}

        <Button variant='contained' onClick={() => navigate(PATH.NOTICE)}>
          닫기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticeDetailPage;
