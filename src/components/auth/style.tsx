import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};

  &::placeholder {
    font-size: 14px;
  }

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

  margin: 20px 0;

  & input[type='checkbox'] {
    width: 15px;
    height: 15px;
    margin: 0 10px 0 0;

    outline: none;
  }
`;

export const ExtendedButton = css`
  margin-top: 20px;
`;
