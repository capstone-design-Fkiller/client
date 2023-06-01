import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 10px;

  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
  height: 150px;
`;

export const InnerBox = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 8px 0;
`;

export const LockerIcon = css`
  margin-left: 15px;
`;
