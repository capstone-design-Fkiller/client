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

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TableHeader = styled.div`
  font-size: 15px;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary_100};
  border: 1px solid ${({ theme }) => theme.colors.primary_100};
  padding: 10px;
  font-weight: bold;
`;

export const TableRow = styled.div`
  font-size: 13px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary_100};
  padding: 10px;
`;

export const TableCell = styled.div`
  flex: 1;
  text-align: center;
`;

export const NoticeTitle = styled.div`
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const Pagebutton = styled.button`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_100};
  }
`;
