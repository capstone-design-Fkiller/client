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
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.fixedHeight} - 60px);
    `};
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 15px 10px;
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};
<<<<<<< Updated upstream:src/pages/login/style.tsx
=======

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin: 20px 0;

  & input[type='checkbox'] {
    width: 15px;
    height: 15px;
    margin: 0 10px 0 0;

    outline: none;
  }
>>>>>>> Stashed changes:src/components/auth/style.tsx
`;

export const ExtendedButton = css`
  margin-top: 20px;
`;
