import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AlertModalListItems = styled.div`
  margin: 0 0 5px 0;
  padding: 10px;

  font-size: 13px;
  border-radius: 5px;
  width: 97%;

  ${({ theme }) =>
    css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.background_2};
    `}
`;

export const AlertInfo = styled.p`
  font-size: 11px;
  text-align: end;
`;
