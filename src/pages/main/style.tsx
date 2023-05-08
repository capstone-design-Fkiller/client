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

export const LockerInfoTitle = styled.h2`
  margin: 10px 0;

  font-size: 17px;
  font-weight: bold;

  ${({ theme }) =>
    css`
      color: ${theme.colors.black};
    `};
`;

export const LockerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50vh;
  margin-bottom: 10px;

  border-radius: 5px;
  font-size: 20px;

  ${({ theme }) =>
    css`
      border: 2px solid ${theme.colors.primary_200};
      background-color: ${theme.colors.primary_100};
    `};
`;

export const LockerInfoContent = styled.div`
  margin: 20px 17px;

  font-size: 15px;
  font-weight: 400;
`;
