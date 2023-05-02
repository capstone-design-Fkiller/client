import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 30px;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
      box-shadow: ${theme.shadow.type_3};
    `};
`;

export const LockkerInfoConatiner = styled.div`
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
    `};
`;
