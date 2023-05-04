import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 30px;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
    `};
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

export const UserBtnStyle = css`
  width: 90%;
  height: 20vh;

  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const FlipButton = styled.button``;
