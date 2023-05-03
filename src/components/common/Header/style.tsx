import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_300};
      box-shadow: ${theme.shadow.type_3};
    `};
`;

export const LogoStyle = styled.div`
  /* display: inline-block; */
`;
export const IconStyle = styled.div`
  display: inline-block;
  justify-content: space-between;
`;
