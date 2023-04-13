import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@/styles/font.css';
import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
