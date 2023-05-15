import styled from '@emotion/styled';

interface NoticeProps {
  id: number;
  major: string;
  title: string;
  date: string;
  content: string;
}

interface TableContentProps {
  contents: NoticeProps[];
  handleContent: (id: number) => void;
}

const TableContent = (props: TableContentProps) => {
  const { contents, handleContent } = props;

  return (
    <tbody>
      {contents.map((notice: NoticeProps) => (
        <Styled.Row key={notice.id} onClick={() => handleContent(notice.id)}>
          <Styled.Item>{notice.id}</Styled.Item>
          <Styled.Item>{notice.major}</Styled.Item>
          <Styled.Item>{notice.title}</Styled.Item>
          <Styled.Item>{notice.date}</Styled.Item>
        </Styled.Row>
      ))}
    </tbody>
  );
};

export default TableContent;

const Styled = {
  Row: styled.tr`
    font-size: 14px;
    width: 100%;
    padding: 10px;

    cursor: pointer;
    transition: 0.1s color ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary_200};
    }
  `,

  Item: styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,
};
