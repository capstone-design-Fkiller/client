import styled from '@emotion/styled';

import { getBuildingName } from '@/constants/building';
import { AssignResponse } from '@/types/assign';

interface TableContentProps {
  contents: AssignResponse[];
  handleContent: (lockerId: number) => void;
}

const TableContent = ({ contents, handleContent }: TableContentProps) => {
  return (
    <tbody>
      {contents.map((result: AssignResponse) => (
        <Styled.Row key={result.id} onClick={() => handleContent(result.id)}>
          <Styled.Item>{result.id}</Styled.Item>
          <Styled.Item>{result.user}</Styled.Item>
          <Styled.Item>{result.locker}</Styled.Item>
          <Styled.Item>{getBuildingName(result.building_id)}</Styled.Item>
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
      color: ${({ theme }) => theme.colors.primary_200};
    }
  `,

  Item: styled.td`
    width: 25%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,
};
