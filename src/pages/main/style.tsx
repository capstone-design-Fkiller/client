import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  padding: 0px 30px;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};

  button {
    margin-bottom: 10px;
  }
`;

export const LockerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50vh;

  border-radius: 5px;
  font-size: 20px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.primary_100};
      margin-bottom: 10px;
    `};
`;
