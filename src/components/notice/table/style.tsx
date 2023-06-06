import styled from '@emotion/styled';

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 15px;

  border-collapse: collapse;
  text-overflow: ellipsis;

  & tr > td,
  & tr > th {
    padding: 10px 5px;
    white-space: nowrap;

    &:first-of-type {
      padding-left: 10px;
    }
  }

  & tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  }
`;

export const Message = styled.h1`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 150px 0;
`;
