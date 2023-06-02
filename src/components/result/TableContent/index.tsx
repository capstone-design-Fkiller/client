import styled from '@emotion/styled';

import { getBuildingName2 } from '@/constants/building';
import { SortResponse } from '@/types/sort';
import { YYMMDD } from '@/utils/date';

interface TableContentProps {
  contents: SortResponse[];
}

const TableContent = ({ contents }: TableContentProps) => {
  const renderItem = (content: number | boolean | null) => {
    if (content === null) {
      return '-';
    } else if (typeof content === 'boolean') {
      return content ? 'O' : 'X';
    } else {
      return content;
    }
  };

  return (
    <tbody>
      {contents.map((result: SortResponse, index: number) => (
        <Styled.Row key={result.id}>
          <Styled.Item>{index + 1}</Styled.Item>
          <Styled.Item>{result.user}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_1_answer)}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_2_answer)}</Styled.Item>
          <Styled.Item>{renderItem(result.priority_3_answer)}</Styled.Item>
          <Styled.Item>{YYMMDD(result.created_at, true)}</Styled.Item>
          <Styled.Item>{getBuildingName2(result.building_id)}</Styled.Item>
        </Styled.Row>
      ))}
    </tbody>
  );
};

export default TableContent;

const Styled = {
  Row: styled.tr`
    font-size: 13px;
    padding: 10px;
    width: 100%;
    transition: 0.1s color ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.light_grey_100};
    }
  `,

  Item: styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,
};
