import styled from '@emotion/styled';

export const MyInfo = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
  gap: 20px;
`;

export const BoldText = styled.b`
  font-weight: bold;
`;
