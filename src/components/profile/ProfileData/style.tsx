import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
  padding: 0 15px;
`;

export const InnerBox = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 10px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const LockerIcon = css`
  margin: 20px 0 10px;
`;
