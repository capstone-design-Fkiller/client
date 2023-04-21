import styled from "@emotion/styled";
import { ButtonBaseProps, Button as MuiButton } from "@mui/material";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren<ButtonBaseProps> {
    className?: string
}

const Button = styled(MuiButton)<ButtonProps>`
    width: 100%;
    padding: 10px;

    border-radius:5px;
    font-family: 'NanumSquare';
    font-weight: normal
`

export default Button;