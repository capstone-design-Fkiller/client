import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;

  width: 400px;
  padding: 10px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white_300};
      box-shadow: ${theme.shadow.type_3};
    `};
`;

export const ActiveLink = (theme: Theme) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `;
};
