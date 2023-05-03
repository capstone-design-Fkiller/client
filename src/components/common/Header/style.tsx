import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;

  padding: 10px;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_300};
      box-shadow: ${theme.shadow.type_3};
    `};
`;

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const IconStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
