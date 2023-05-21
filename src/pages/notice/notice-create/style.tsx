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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0 30px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.grey_400};
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;
