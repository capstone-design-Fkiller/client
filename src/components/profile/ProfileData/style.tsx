import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 30px;
`;

export const MyInfo = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 10px;

  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
  height: 150px;

  &.none {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;

export const LockerIcon = css`
  margin-left: 15px;
`;
