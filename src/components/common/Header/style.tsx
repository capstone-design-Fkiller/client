import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Root = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  height: 100%;
  max-height: 60px;

  z-index: 999;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_300};
    `};
`;

<<<<<<< HEAD
  #header-logo {
    margin-top: 4px;
    font-size: 21px;
    font-weight: 500;
=======
export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.primary_300};
>>>>>>> origin/develop

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_300};
    `};
`;

export const HeaderIconsArrange = styled.div`
  display: flex;
  justify-content: space-between;
`;
