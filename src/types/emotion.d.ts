import '@emotion/react';
import { emotion_theme } from '@/styles/theme';

type CustomTheme = typeof emotion_theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}
