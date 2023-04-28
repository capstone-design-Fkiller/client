import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Loader = styled.div`
  position: absolute;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;

  border-radius: 50%;
  animation: spin 1s linear infinite;

  ${({ theme }) =>
    css`
      border: 5px solid ${theme.colors.light_grey_100};
      border-top: 5px solid ${theme.colors.primary_200};
    `};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
