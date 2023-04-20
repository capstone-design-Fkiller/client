import styled from '@emotion/styled';
import { Button as MuiButton, ButtonBaseProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<ButtonBaseProps> {
  className?: string;
}

const AdminButton = styled(MuiButton)<ButtonProps>`
  width: 100%;
  padding: 10px;

  border-radius: 30px;
  font-weight: normal;
  font-size: 20px;
`;

export default AdminButton;
