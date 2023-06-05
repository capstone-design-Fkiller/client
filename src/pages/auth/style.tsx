import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  min-height: calc(var(--vh, 1vh) * 100);
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const Toggle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey_200};
  text-decoration: underline;

  margin-top: 20px;
  cursor: pointer;
`;
