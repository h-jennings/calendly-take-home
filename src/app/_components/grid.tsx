"use client";

import styled from "styled-components";
import { Space } from "../_styles/theme";

type GridProps = {
  columns?: string;
  rows?: string;
  gap?: Space;
  columnGap?: Space;
  rowGap?: Space;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "auto"};
  grid-template-rows: ${({ rows }) => rows || "auto"};
  gap: ${({ gap }) => gap != null && `var(--space-${gap})`};
  column-gap: ${({ columnGap }) =>
    columnGap != null && `var(--space-${columnGap})`};
  row-gap: ${({ rowGap }) => rowGap != null && `var(--space-${rowGap})`};
`;
