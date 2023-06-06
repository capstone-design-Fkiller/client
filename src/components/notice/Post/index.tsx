import { ChangeEvent } from 'react';

import * as Styled from './style';

import { YYMMDD } from '@/utils/date';

interface PostProps {
  id?: number;
  created?: string;
  title: string;
  content: string;
  handleTitle?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleContent?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Post = (props: PostProps) => {
  const { id, created, title, content } = props;

  return (
    <Styled.Container className='short'>
      <Styled.Info>
        <p>
          공지번호: {id} | 공지날짜: {YYMMDD(created || '')}
        </p>
      </Styled.Info>

      <Styled.Content>제목</Styled.Content>
      <Styled.ContentTitle>{title}</Styled.ContentTitle>
      <Styled.Content>내용</Styled.Content>
      <Styled.ContentBody>{content}</Styled.ContentBody>
    </Styled.Container>
  );
};

export default Post;

Post.Edit = function Post(props: PostProps) {
  const { title, content, handleTitle, handleContent } = props;

  return (
    <Styled.Container>
      <Styled.Label htmlFor='title'>제목</Styled.Label>
      <Styled.Input
        type='text'
        id='title'
        value={title}
        onChange={handleTitle}
        placeholder='제목을 작성해주세요.'
      />
      <Styled.Label htmlFor='content'>내용</Styled.Label>
      <Styled.Textarea
        id='content'
        defaultValue={content}
        onChange={handleContent}
        placeholder='내용을 작성해주세요.'
      />
    </Styled.Container>
  );
};
