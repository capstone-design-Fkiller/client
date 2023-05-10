import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  height: 55px;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_100};
    `};

  #header-logo {
    margin-top: 4px;
    font-size: 24px;

    ${({ theme }) =>
      css`
        color: ${theme.colors.primary_300};
      `};
  }
`;

export const HeaderIconsArrange = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const AlertModalTitle = styled.div`
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
  padding-top: 30px;

  overflow-x: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_100};
    border-radius: 10px;
    height: 20px;
  }

  div:last-child {
    margin: 0;
  }
`;

export const AlertModalListItems = styled.div`
  margin: 0 0 5px 0;
  padding: 10px;

  font-size: 13px;
  border-radius: 5px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.background_2};
    `}
`;
