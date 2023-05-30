import { Theme, css } from '@emotion/react';
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 450px;

  background-color: ${({ theme }) => theme.colors.white_300};
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  margin-bottom: 30px;

  overflow-y: auto;
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
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary_200};
  font-size: 1.2rem;

  margin-bottom: 30px;
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
    width: 100%;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;

  border: 0;
  background: ${({ theme }) => theme.colors.light_grey_200};
`;

export const ExtendedButton = (theme: Theme) => css`
  &.disabled {
    background-color: ${theme.colors.light_grey_200};
    color: ${theme.colors.black};
  }

  &.disabled:hover {
    background-color: ${theme.colors.grey_400};
  }
`;

// export const SelectWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 10px;

//   width: 100%;
//   margin: 50px 0 0 0;
// `;

// export const DateBox = styled.div`
//   width: 100%;
//   min-height: 46px;
//   padding: 10px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
//   border-radius: 5px;
//   outline: none;
// `;

// export const DateText = styled.span`
//   font-size: 14px;
// `;

// export const DateLabel = styled.span`
//   position: absolute;
//   left: 0;
//   top: -20px;
//   font-size: 14px;
//   color: ${({ theme }) => theme.colors.primary_300};
//   margin: 50px 0 30px 0;
// `;
