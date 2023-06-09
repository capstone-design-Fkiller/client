import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 15px;

  border-collapse: collapse;

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

export const ModalContent = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary_100};
  margin-top: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const textarea = styled.textarea`
  margin-top: 5%;
  width: 100%;
  height: 80%;
  resize: none;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;
