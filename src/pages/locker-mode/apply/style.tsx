import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 350px 1fr;

  width: 100%;
  height: 450px;

  background-color: ${({ theme }) => theme.colors.white_300};
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  margin-bottom: 30px;
`;

export const LockerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InformBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  width: 100%;
  padding: 0 10px;

  border-top: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  background-color: ${({ theme }) => theme.colors.background_2};

  & > div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 24px;

    &:last-of-type {
      padding: 0 10px;
    }
  }
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  padding-left: 10px;

  border: 0;
  background: ${({ theme }) => theme.colors.light_grey_200};
`;
