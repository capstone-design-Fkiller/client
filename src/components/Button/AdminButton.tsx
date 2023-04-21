import styled from '@emotion/styled';
import { Button as MuiButton, ButtonBaseProps, css } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<ButtonBaseProps> {
  className?: string;
}

const AdminButton = styled(MuiButton)<ButtonProps>`
  width: 100%;
  height: 25vh;
  padding: 10px;

  border-radius: 30px;
  font-weight: normal;
  font-size: 20px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.primary_200};
    `};
`;

export default AdminButton;
