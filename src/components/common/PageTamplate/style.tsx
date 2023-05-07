import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  width: 100%;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background_1};
    `}
`;

export const Container = styled.div`
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: 400px;
  min-width: 320px;

  margin: 0 auto;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
    `}
`;

export const AlertModalTitle = styled.div`
  display: fixed;
  text-align: center;

  margin-bottom: 15px;

  font-size: 18px;
  font-weight: bold;

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_300};
    `}
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 90%;

  overflow-x: auto;
`;

export const AlertModalListItems = styled.div`
  margin: 3px 3px;
  padding: 10px;

  font-size: 13px;
  border-radius: 5px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.background_2};
    `}
`;
