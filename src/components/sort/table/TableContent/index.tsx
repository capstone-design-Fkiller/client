import styled from '@emotion/styled';
import { Fragment } from 'react';

import Icon from '@/components/common/Icon';
import { getBuildingName2 } from '@/constants/building';
import { SortResponse } from '@/types/sort';
import { YYMMDD } from '@/utils/date';

interface TableContentProps {
  contents: SortResponse[];
  handleDelete: (lockerId: number) => void;
}

const TableContent = ({ contents, handleDelete }: TableContentProps) => {
  const renderItem = (content: number | boolean | null) => {
    if (content === null) {
      return '-';
    } else if (typeof content === 'boolean') {
      return content ? 'O' : 'X';
    } else {
      return content;
    }
  };

  const handleColumns = (id: number) => {
    const res = confirm('정말 삭제하시겠습니까?');

    if (res) handleDelete(id);
  };

  return (
    <tbody>
      {contents.map((result: SortResponse) => (
        <Fragment key={result.id}>
          <Styled.Row>
            <Styled.Item>{result.user}</Styled.Item>
            <Styled.Item>{renderItem(result.priority_1_answer)}</Styled.Item>
            <Styled.Item>{renderItem(result.priority_2_answer)}</Styled.Item>
            <Styled.Item>{renderItem(result.priority_3_answer)}</Styled.Item>
            <Styled.Item>{YYMMDD(result.created_at, true)}</Styled.Item>
            <Styled.Item>{getBuildingName2(result.building_id)}</Styled.Item>
            <Styled.IconItem onClick={() => handleColumns(result.id)}>
              <Icon iconName='trashcan' size='18' />
            </Styled.IconItem>
          </Styled.Row>
        </Fragment>
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

  IconItem: styled.td`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover svg path {
      stroke: ${({ theme }) => theme.colors.error_100};
    }
  `,
};
