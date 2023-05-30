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
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  width: 100%;
  margin: 50px 0 30px 0;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0 50px;
  gap: 20px;

  p.isError {
    color: ${({ theme }) => theme.colors.error_100};
  }
`;
