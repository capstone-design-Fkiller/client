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
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const Table = styled.table`
  width: 100%; 

  td {
    white-space: nowrap; // 줄바꿈 방지
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px; // 셀 최대 너비
  }

  th {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary_300};
  }
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
