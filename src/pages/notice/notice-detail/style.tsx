import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight});
    `};
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const TitleMajor = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary_100};
`;

export const Content = styled.h1`
  margin-bottom: 10px;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  padding: 20px;
`;

export const ContentTitle = styled.h2`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;

export const ContentBody = styled.h2`
  width: 100%;
  height: 250px;
  resize: none;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;

export const ContentInfo = styled.div`
  display: flex;
  font-size: 13px;
  margin-bottom: 10px;
  justify-content: right;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr;
`;
