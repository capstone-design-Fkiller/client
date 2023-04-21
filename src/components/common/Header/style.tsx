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
      box-shadow: ${theme.shadow.type_2};
    `};
`;

export const ActiveLink = (theme: Theme) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    //클릭할 때만 색 바뀌게 설정
    &:active {
      path {
        stroke: ${theme.colors.primary_200};
        color: ${theme.colors.primary_200};
      }
    }

    /* 로고만 맨 왼쪽에 붙여주고 싶다,, */
    /* img :first-child {
      align-self: flex-start;
    }; */
  `;
};
