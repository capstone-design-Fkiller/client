import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 30px;
`;

export const MyInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;
  /* font-size: 15px; */

  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 150px;
  /* p {
    color: ${({ theme }) => theme.colors.error_100};
  } */

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

export const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white_300};
  background-color: ${({ theme }) => theme.colors.primary_200};

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 40px;
`;
