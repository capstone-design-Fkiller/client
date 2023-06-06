import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import Post from '@/components/notice/Post';
import useInput from '@/hooks/useInput';
import { useEditNoticeMutation, useFetchNoticeDetail } from '@/query/notice';
import { PATH } from '@/utils/path';

const NoticeEditPage = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const { mutate: updateNoticeMutate } = useEditNoticeMutation();
  const { data: noticeData, isLoading } = useFetchNoticeDetail(Number(noticeId));
  const { value: title, handleValue: handleTitle, setValue: setTitle } = useInput<string>('');
  const { value: content, handleValue: handleContent, setValue: setContent } = useInput<string>('');

  const handleSubmit = () => {
    updateNoticeMutate({ id: Number(noticeId), title, content });
    navigate(PATH.NOTICE);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!noticeData) return <p>정보를 불러올 수 없습니다. 다시 시도해주세요!</p>;

  useEffect(() => {
    setTitle(noticeData.title);
  }, [noticeData]);

  useEffect(() => {
    setContent(noticeData.content);
  }, [noticeData]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항 수정</Styled.Title>
        <Post.Edit
          title={title}
          handleTitle={handleTitle}
          content={content}
          handleContent={handleContent}
        />
        <Styled.ButtonContainer>
          <Button variant='contained' onClick={handleSubmit}>
            수정 완료
          </Button>
          <Button variant='outlined' onClick={() => navigate(PATH.NOTICE)}>
            취소
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticeEditPage;
