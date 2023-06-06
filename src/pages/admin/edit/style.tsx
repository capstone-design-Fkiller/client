import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 30px;
  gap: 20px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const InformText = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_200};
    `};
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  width: 100%;
  margin-top: 20px;
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

export const Container = styled.div`
  display: grid;
  grid-template-rows: 350px 1fr;

  width: 100%;
  height: 350px;

  background-color: ${({ theme }) => theme.colors.white_300};
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  margin-bottom: 30px;
`;

export const InformBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  width: 100%;
  padding: 0 10px 10px 10px;

  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-top: 1px solid ${({ theme }) => theme.colors.background_2};
  background-color: ${({ theme }) => theme.colors.background_1};

  & > div {
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary_100};
    }
  }

  & > div:last-of-type {
    width: 68%;
  }
`;
export const AlertModalTitle = styled.div`
  text-align: center;

  margin-top: 5px;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: bold;

  ${({ theme }) =>
    css`
      color: ${theme.colors.primary_300};
    `}
`;

export const Labels = styled.div`
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary_300};
  }
`;

export const Explanation = styled.span`
  font-weight: 300;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grey_200};
  text-align: center;
  position: relative;
  /* top: -10px; */
  top: 13px;
`;

export const PriorityExplanation = styled.span`
  position: relative;
  /* top: -10px; */

  display: flex;
  flex-direction: column;

  font-weight: 300;
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.grey_200};
  text-align: center;
`;
