import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { useCreateNoticeMutation } from '@/query/notice';
import { PATH } from '@/utils/path';

const NoticeCreatePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { mutate: createNoticeMutate } = useCreateNoticeMutation();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    createNoticeMutate({ title, content });
    navigate(PATH.NOTICE_MANAGE);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항 작성</Styled.Title>
        <Styled.Container>
          <Styled.Label htmlFor='title'>제목</Styled.Label>
          <Styled.Input
            type='text'
            id='title'
            value={title}
            onChange={handleTitleChange}
            placeholder='제목을 작성해주세요.'
          />
          <Styled.Label htmlFor='content'>내용</Styled.Label>
          <Styled.Textarea
            id='content'
            value={content}
            onChange={handleContentChange}
            placeholder='내용을 작성해주세요.'
          />
        </Styled.Container>
        <Styled.ButtonContainer>
          <Button variant='contained' onClick={handleSubmit}>
            등록
          </Button>
          <Button variant='outlined' onClick={() => navigate(PATH.NOTICE_MANAGE)}>
            취소
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticeCreatePage;
