import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import useInput from '@/hooks/useInput';
import { useEditNoticeMutation, useFetchNoticeDetail } from '@/query/notice';
import { PATH } from '@/utils/path';

const NoticeEditPage = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [content, setContent] = useState('');
  const { mutate: updateNoticeMutate } = useEditNoticeMutation();
  const { value: title, handleValue: handTitle } = useInput<string>('');
  const [selectedNotice, setSelectedNotice] = useState(Number(noticeId));
  const { data: noticeData, isLoading } = useFetchNoticeDetail(selectedNotice);

  useEffect(() => {
    if (!noticeId) {
      navigate(PATH.NOTICE);
    } else {
      const parsedNoticeId = parseInt(noticeId);
      setSelectedNotice(parsedNoticeId);
    }
  }, [noticeId, navigate]);

  if (isLoading || selectedNotice === 0) {
    return <Loader />;
  }

  if (!noticeData || !noticeId) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const handleSubmit = () => {
    updateNoticeMutate({ id: Number(noticeId), title, content });
    navigate(PATH.NOTICE);
  };

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항 수정</Styled.Title>
        <Styled.Container>
          <Styled.Label htmlFor='title'>제목</Styled.Label>
          <Styled.Input
            type='text'
            id='title'
            defaultValue={`${noticeData.title}`}
            onChange={handTitle}
          />
          <Styled.Label htmlFor='content'>내용</Styled.Label>
          <Styled.Textarea
            id='content'
            defaultValue={`${noticeData.content}`}
            onChange={handleContent}
          />
        </Styled.Container>
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