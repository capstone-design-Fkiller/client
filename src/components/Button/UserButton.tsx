import styled from '@emotion/styled';
import { Button as MuiButton, ButtonBaseProps } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<ButtonBaseProps> {
  className?: string;
}
const SubmitButton = styled(MuiButton)<ButtonProps>`
  width: 30%;
  padding: 10px;

  border-radius: 5px;
  font-weight: normal;
`;

export default SubmitButton;
