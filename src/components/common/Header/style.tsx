import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_300};
    `};
`;

export const IconStyle = styled.div`
  display: flex;
  justify-content: space-around;
`;
