import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import '@/styles/font.css';
import globalStyle from '@/styles/globalStyle';
import { mui_theme, emotion_theme } from '@/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ThemeProvider theme={emotion_theme}>
          <MuiThemeProvider theme={mui_theme}>
            <Global styles={globalStyle} />
            <App />
          </MuiThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
