import styled from '@emotion/styled';

import { BUILDING2 } from '@/constants/building';
import { SortResponse } from '@/types/sort';

interface TableContentProps {
  contents: SortResponse[];
  handleContent: (lockerId: number) => void;
}

const TableContent = ({ contents, handleContent }: TableContentProps) => {
  const renderItem = (content: number | boolean | null) => {
    if (content === null) {
      return '-';
    } else if (typeof content === 'boolean') {
      return content.toString();
    } else {
      return content;
    }
  };

  return (
    <tbody>
      {contents.map((result: SortResponse) => (
        <Styled.Row key={result.id} onClick={() => handleContent(result.id)}>
          <Styled.Item>{result.id}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_1_answer)}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_2_answer)}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_3_answer)}</Styled.Item>
          <Styled.Item>{BUILDING2[result.building_id]}</Styled.Item>
        </Styled.Row>
      ))}
    </tbody>
  );
};

export default TableContent;

const Styled = {
  Row: styled.tr`
    font-size: 14px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    transition: 0.1s color ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.error_200};
    }
  `,

  Item: styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,
};
