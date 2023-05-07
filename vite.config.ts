import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

let baseUrl = '/';
if (process.env.PREVIEW_PATH) baseUrl += `${process.env.PREVIEW_PATH}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: baseUrl,
});
