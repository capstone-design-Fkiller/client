import styled from '@emotion/styled';

export const Root = styled.div`
  width: 300px;
  height: 50%;
  padding: 20px 30px;

  border-radius: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.white_300};
`;
