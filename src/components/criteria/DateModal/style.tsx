import styled from '@emotion/styled';

export const Root = styled.div`
  width: 380px;
  height: 65%;
  padding: 20px 20px;

  border-radius: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.white_300};
`;
