import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 30px;
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
  height: 70vh;

  border-radius: 5px;
  font-size: 20px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.primary_100};
      margin-bottom: 10px;
    `};
`;

export const ShareButton = styled.button`
  width: 30%;
`;

export const AdminButton = styled.button`
  height: '25vh';
  margin-bottom: '10px';
  border-radius: '30px';
  font-size: '20px';
  display: 'none';
`;

export const FlipButton = styled.button``;
