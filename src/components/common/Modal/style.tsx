import styled from '@emotion/styled';

export const Root = styled.div`
  width: 300px;
  height: 50%;
  padding: 20px 30px;
  max-height: 50%;
  overflow-y: auto;

  border-radius: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.white_300};
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_100};
    border-radius: 10px;
    height: 20px;
  }
`;
