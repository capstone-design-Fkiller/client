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

export const Main = styled.main`
  padding: 90px 0 125px 0;

  &.without {
    padding: 0;
  }
`;
