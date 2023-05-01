import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import '@/styles/font.css';
import globalStyle from '@/styles/globalStyle';
import { mui_theme, emotion_theme } from '@/styles/theme';

console.log(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider theme={emotion_theme}>
        <MuiThemeProvider theme={mui_theme}>
          <Global styles={globalStyle} />
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
