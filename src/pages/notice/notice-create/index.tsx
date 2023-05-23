import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { useCreateNotice } from '@/query/notice';
import { NoticeRequest } from '@/types/notice';
import { PATH } from '@/utils/path';

const CreateNoticePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createNotice } = useCreateNotice();
  const navigate = useNavigate();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    const notice: NoticeRequest = {
      title,
      content,
    };

    await createNotice(notice);
    navigate(PATH.NOTICE);
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
        <Button variant='contained' onClick={handleSubmit}>
          확인
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default CreateNoticePage;
