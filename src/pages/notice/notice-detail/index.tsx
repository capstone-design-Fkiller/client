import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { useDeleteNoticeMutation, useFetchNoticeDetail } from '@/query/notice';
import { useFetchMe } from '@/query/user';
import { YYMMDD } from '@/utils/date';
import { PATH } from '@/utils/path';

const NoticeDetailPage = () => {
  const { me } = useFetchMe();
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [selectedNotice, setSelectedNotice] = useState(Number(noticeId));
  const { data: noticeData, isLoading } = useFetchNoticeDetail(selectedNotice);
  const { mutate: deleteNoticeMutation } = useDeleteNoticeMutation();

  useEffect(() => {
    if (!noticeId) {
      navigate(PATH.NOTICE);
    } else {
      const parsedNoticeId = parseInt(noticeId);
      if (isNaN(parsedNoticeId)) {
        navigate(PATH.NOTICE);
      } else {
        setSelectedNotice(parsedNoticeId);
      }
    }
  }, [noticeId, navigate]);

  const handleDelete = () => {
    const res = confirm('정말 삭제하시겠습니까?');

    if (res) {
      deleteNoticeMutation(selectedNotice);
      navigate(PATH.NOTICE);
    }
  };

  const handleEdit = () => {
    navigate(`${PATH.NOTICE}/edit/${noticeId}`);
  };

  if (isLoading || selectedNotice === 0) {
    return <Loader />;
  }

  if (!noticeData || !noticeId || isNaN(parseInt(noticeId))) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항</Styled.Title>
        <Styled.TitleMajor>{me?.major}</Styled.TitleMajor>
        <Styled.ContentContainer>
          <Styled.ContentInfo>
            공지번호: {noticeData.id} | 공지날짜: {YYMMDD(noticeData.created_at)}
          </Styled.ContentInfo>
          <Styled.Content>제목</Styled.Content>
          <Styled.ContentTitle>{`${noticeData.title}`}</Styled.ContentTitle>
          <Styled.Content>내용</Styled.Content>
          <Styled.ContentBody>{noticeData.content}</Styled.ContentBody>
        </Styled.ContentContainer>
        {me?.is_usermode || (
          <Styled.ButtonContainer>
            <Button variant='contained' onClick={handleDelete}>
              삭제
            </Button>
            <Button variant='outlined' onClick={handleEdit}>
              수정
            </Button>
          </Styled.ButtonContainer>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticeDetailPage;
