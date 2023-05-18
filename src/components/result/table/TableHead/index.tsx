import styled from '@emotion/styled';

interface TableHeadProps {
  headers: string[];
}

const TableHead = (props: TableHeadProps) => {
  const { headers } = props;

  return (
    <Styled.Head>
      <tr>
        {headers.map(head => (
          <Styled.Item key={head}>{head}</Styled.Item>
        ))}
      </tr>
    </Styled.Head>
  );
};

export default TableHead;

const Styled = {
  Head: styled.thead`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary_200};
    border-radius: 5px;
  `,

  Item: styled.th`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
  `,
};
