import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh, 1vh) * 100 - 95px);
  padding: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  margin: 5px 30px;
  max-width: 230px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};
`;

export const typeContainerStyles = css`
  display: flex;
  justify-content: center;
  max-width: 115px;
`;

export const loginButtonStyles = css`
  margin-top: 10px;
`;