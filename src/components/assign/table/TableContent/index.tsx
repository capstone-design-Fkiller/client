import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
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
        <Styled.Row key={result.id}>
          <Styled.Item>{result.locker_number}</Styled.Item>
          <Styled.Item>{getBuildingName(result.building_id)}</Styled.Item>
          <Styled.Item>{result.user}</Styled.Item>
          <Styled.Item>{result.user_name}</Styled.Item>
          <Styled.IconItem onClick={() => handleContent(result.id)}>
            <Icon iconName='bell' size='20' />
          </Styled.IconItem>
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
  `,

  Item: styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,

  IconItem: styled.td`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.1s color ease-in-out;
    cursor: pointer;
    &:hover svg path {
      stroke: ${({ theme }) => theme.colors.secondary_200};
    }
  `,
};
