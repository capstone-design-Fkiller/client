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
    font-size: 21px;
    font-weight: 500;

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
