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
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.primary_200};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 10px;
`;

export const IdpwInput = styled.input`
  padding: 15px 10px;
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};
`;
