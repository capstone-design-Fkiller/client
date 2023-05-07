import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  width: 100%;
  margin: 50px 0 30px 0;
`;
