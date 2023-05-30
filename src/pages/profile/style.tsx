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
export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
  padding: 15px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
