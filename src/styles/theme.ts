import { createTheme, responsiveFontSizes } from '@mui/material';

export const mui_theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: '#2CB67D', light: '#8fd3b1', dark: '#009a5c', contrastText: '#fff' },
      secondary: { main: '#bbe4cf', contrastText: '#00884f' },
      error: { main: '#ef5350', dark: '#d32f2f', contrastText: '#fff' },
      warning: { main: '#ff9800', dark: '#ed6c02', contrastText: '#fff' },
    },
  })
);

const colors = {
  primary_200: '#2CB67D',
  primary_100: '#8fd3b1',
  primary_300: '#009a5c',

  secondary_100: '#bbe4cf',
  secondary_200: '#00884f',

  error_100: '#ef5350',
  error_200: '#d32f2f',

  warning_100: '#ff9800',
  warning_200: '#ed6c02',

  white_300: '#fff',
  white_200: '#ffffff7a',
  white_100: '#ffffff3d',

  black: '#222',

  grey_400: '#555555',
  grey_300: '#6F6F6F',
  grey_200: '#8B8B8B',
  grey_100: '#A5A5A5',

  light_grey_100: '#dfdfdf',
  light_grey_200: '#C1C1C1',

  background_1: '#F7F7F7',
  background_2: '#F5F4F3',

  blue_400: '#002b49',
  blue_300: '#00365b',
  blue_200: '#004372',
  blue_100: '#00548f',
};

const shadow = {
  type_1: 'rgba(0, 0, 0, 0.09) 0px 2px 5px 0px',
  type_2: 'rgba(100, 100, 111, 0.2) 0px -11px 15px -10px',
  type_3: 'rgba(100, 100, 111, 0.2) 0px 11px 0px 0px',
};

const layouts = {
  maxWidth: '400px',
  fixedHeight: '215px',
};

export const emotion_theme = { colors, shadow, layouts };
