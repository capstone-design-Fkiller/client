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
  padding: 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  margin: 20px;
`;
  
export const IdpwInput = styled.input`
  padding: 10px 15px;
  margin: 5px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.type_1};
`;

export const TypeContainerStyles = css`
  display: flex;
  justify-content: center;
  max-width: 120px;
`;

export const LoginButtonStyles = css`
  margin-top: 10px;
`;