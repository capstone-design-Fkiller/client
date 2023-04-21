import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  & > * {
    margin-bottom: 5px;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};
`;

export const TypeButton = styled.button<{ selected: boolean }>`
  padding: 10px;
  border-radius: 5px;
  margin: 1px;
  width: 53%;

  ${({ theme }) =>
    css`
      color: ${theme.colors.white_300};
      background-color: ${theme.colors.primary_100};

      &.selected, &:focus {
      background-color: ${theme.colors.secondary_200};
      }
    `}
`;