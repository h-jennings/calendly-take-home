"use client";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ff0000",
  },
} as const;

export type Theme = typeof theme;

interface ThemeProps {
  children: React.ReactNode;
}
export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
