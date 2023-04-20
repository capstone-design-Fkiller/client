import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 30px 0;
`;

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -50px;
  margin: 0;

  width: 100%;
  height: 70vh;
  padding: 15px 20px 30px;

  border-radius: 20px;
  font-size: 20px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.primary_100};
    `};
`;
