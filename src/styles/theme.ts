import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: '#2CB67D' },
    },
  })
);

export default theme;
