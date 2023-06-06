import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Root = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 22px 10px 30px;

  height: 100%;
  max-height: 60px;

  z-index: 999;

  ${({ theme }) =>
    css`
      width: ${theme.layouts.maxWidth};
      background-color: ${theme.colors.white_300};
    `};
`;

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.primary_300};

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_300};
    `};
`;

export const HeaderIconsArrange = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AlertModalTitle = styled.div`
  text-align: center;

  margin-bottom: 15px;

  font-size: 18px;
  font-weight: bold;

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_300};
    `}
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 90%;
  padding-top: 30px;

  overflow-x: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_100};
    border-radius: 10px;
    height: 20px;
  }

  div:last-of-type {
    margin: 0;
  }
`;

export const ExtendedAlertIcon = (theme: Theme) => css`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 1px;
    top: 4px;

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.error_100};
  }
`;

export const CountAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 12px;
  position: relative;
  left: 11px;
`;
