import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Post from '@/components/notice/Post';
import useInput from '@/hooks/useInput';
import { useCreateNoticeMutation } from '@/query/notice';
import { PATH } from '@/utils/path';

const NoticeCreatePage = () => {
  const navigate = useNavigate();
  const { mutate: createNoticeMutate } = useCreateNoticeMutation();
  const { value: title, handleValue: handleTitle } = useInput<string>('');
  const { value: content, handleValue: handleContent } = useInput<string>('');

  const handleSubmit = () => {
    createNoticeMutate({ title, content });
    navigate(PATH.NOTICE);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>공지사항 작성</Styled.Title>
        <Post.Edit
          title={title}
          handleTitle={handleTitle}
          content={content}
          handleContent={handleContent}
        />
        <Styled.ButtonContainer>
          <Button variant='contained' onClick={handleSubmit}>
            등록하기
          </Button>
          <Button variant='outlined' onClick={() => navigate(PATH.NOTICE)}>
            취소
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticeCreatePage;
