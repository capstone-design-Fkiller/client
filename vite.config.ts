import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

let baseUrl = '/client/';
if (process.env.PREVIEW_PATH) baseUrl += `${process.env.PREVIEW_PATH}`;

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    mkcert(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: baseUrl,
});
