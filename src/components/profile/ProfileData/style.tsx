import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  padding: 0 15px;
  margin-bottom: 10px;

  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-radius: 5px;
`;

export const InnerBox = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 10px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const LockerIcon = css`
  margin: 20px 0 10px;
`;

export const IconContainer = styled.div`
  margin: 0 13px 0 16px;
`;