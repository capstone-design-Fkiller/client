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
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const TitleMajor = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_100};
`;

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 15px;

  border-collapse: collapse;

  & tr > td,
  & tr > th {
    padding: 10px 0;
    white-space: nowrap;

    &:first-of-type {
      padding-left: 10px;
    }
  }

  & tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_200};
`;

export const ModalTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalContent = styled.div`
  white-space: pre-line;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey_400};
  margin-top: 20px;
  line-height: 1.4;
`;

export const ModalButtons = styled.div`
  position: flex;
  margin-top: 10px;
  justify-content: flex-end;
`;
