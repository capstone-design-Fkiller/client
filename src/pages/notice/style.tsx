import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const TitleMajor = styled.h1`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_100};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  margin-bottom: 30px;
  grid-template-columns: 1fr 1fr;
`;
