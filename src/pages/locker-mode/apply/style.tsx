import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  ${({ theme }) =>
    css`
      min-height: calc(var(--vh, 1vh) * 100 - ${theme.layouts.bottomNavHeight});
    `};
`;

export const InformBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  & button {
    border: 1px solid;
  }
`;

export const ModalWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  margin-top: 30px;
`;

export const ExtendedButton = css`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid;
`;

export const LockerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 400px;
  margin-top: 80px;

  border: 1px solid ${({ theme }) => theme.colors.primary_200};
  border-radius: 5px;
`;
