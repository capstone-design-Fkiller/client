import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  width: 400px;
  padding: 15px 20px 30px;

  position: fixed;
  bottom: 0;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
      box-shadow: ${theme.shadow.type_2};
    `};
`;

export const ActiveLink = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active > div > svg > path,
  &.active p {
    stroke: ${theme.colors.primary_200};
    color: ${theme.colors.primary_200};
  }
`;

export const Label = styled.p`
  margin-top: 5px;
  font-size: 12px;
`;
