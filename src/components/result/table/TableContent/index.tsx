import styled from '@emotion/styled';

import { BUILDING2 } from '@/constants/building'
import { LockerResult } from '@/types/locker';

interface TableContentProps {
  contents: LockerResult[];
  handleContent: (lockerId: number) => void;
}

const TableContent = ({ contents, handleContent }: TableContentProps) => {
  return (
    <tbody>
      {contents.map((result: LockerResult) => (
        <Styled.Row key={result.lockerId} onClick={() => handleContent(result.lockerId)}>
          <Styled.Item>{result.lockerId}</Styled.Item>
          <Styled.Item>{BUILDING2[result.building]}</Styled.Item>
          <Styled.Item>{result.userId || '00000000'}</Styled.Item>
          <Styled.Item>{result.name || '홍길동'}</Styled.Item>
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
