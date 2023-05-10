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
  margin: 50px 0 0 0;
`;

export const DateBox = styled.div`
  width: 100%;
  min-height: 46px;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
  outline: none;
`;

export const DateText = styled.span`
  font-size: 14px;
`;

export const DateLabel = styled.span`
  position: absolute;
  left: 0;
  top: -20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_300};
  margin: 50px 0 30px 0;
`;
