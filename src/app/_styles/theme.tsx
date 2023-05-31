"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  --colors-white: #FFFFFF;
  --colors-black: #020214;
  --colors-yellow: #FFC700;
  --colors-surfacePrimary: #020214;
  --colors-surfaceSecondary: #1E1E2C;
  --colors-surfaceAccent: #2D2D3F;
  --colors-textPrimary: var(--colors-white);
  --colors-textSecondary: var(--colors-black);
  --colors-textAccent: var(--colors-yellow);
  --space-0: 8px;
  --space-1: 12px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;
  --space-9: 192px;
  --sizes-full: 100%;
  --sizes-prose: 65ch;
  --sizes-desktop: 1440px;
  --sizes-screenW: 100vw;
  --sizes-screenH: 100vh;
  --radii-pill: 9999px;
  --radii-circle: 50%;
  --fontWeights-regular: 400;
  --fontWeights-medium: 500;
  --fontWeights-bold: 700;
  --fontSizes-small: 14px;
  --fontSizes-0: 16px;
  --fontSizes-1: 18px;
  --fontSizes-2: 24px;
  --fontSizes-3: 32px;
  --fontSizes-4: 48px;
  --fontSizes-5: 64px;
  --leading-0: 1;
  --leading-1: 1.25;
  --leading-2: 1.5;
  --leading-3: 1.75;
  --zIndices-init: 0;
  --zIndices-nuclear: 9999;
  --transitions-default: 225ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type FontSize = "small" | 0 | 1 | 2 | 3 | 4 | 5;
export type Leading = 0 | 1 | 2 | 3;
export type FontWeight = "regular" | "medium" | "bold";

interface ThemeProps {
  children: React.ReactNode;
}
export const Theme = ({ children }: ThemeProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
