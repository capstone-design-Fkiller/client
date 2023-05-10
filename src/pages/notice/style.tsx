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
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  table-layout: fixed;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  font-size: 15px;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_200};
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  font-size: 13px;
  display: flex;
  width: 100%;
  padding: 10px;
`;

export const TableCell = styled.td`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const NoticeTitle = styled.h1`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary_200};
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContent = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary_100};
  margin-top: 20px;
`;